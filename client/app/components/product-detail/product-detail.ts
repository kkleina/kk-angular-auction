import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {ActivatedRoute}  from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Product, Review, ProductService} from '../../services/product-service';
import {BidService} from '../../services/bid-service';
import StarsComponet from '../stars/stars';

@Component({
  selector: 'auction-product-page',
  styleUrls: ['app/components/product-detail/product-detail.css'],
  templateUrl: 'app/components/product-detail/product-detail.html',
  directives: [StarsComponet]
})
export default class ProductDetailComponent {
  product: Product;
  reviews: Review[];
  newComment: string;
  newRating: number;
  isReviewHidden: boolean = true;

  constructor(route: ActivatedRoute, productService: ProductService, private bidService: BidService){
    let prodId: number = parseInt(route.snapshot.params['productId']);
    productService
      .getProductById(prodId)
      .subscribe(
        product => {
          this.product = product;
          this.currentBid = product.price;
        },
        error => console.error(error)
      );

    productService
      .getReviewsForProduct(prodId)
      .subscribe(
        reviews => this.reviews = reviews,
        error => console.error(error)
      );
  }

  addReview(){
    let review = new Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
    console.log("Dodawanie opinii " + JSON.stringify(review));
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);
    this.resetForm;
  }

  averageRating(reviews: Review[]){
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm(){
    rhis.newRating = 0;
    this.newComment = null;
    this.idReviewHidden = true;
  }

  toggleWatchProduct(){
    if (this.subscription){
      this.subscription.unsubscribe();
      this.subscription = null;
      this.isWatching = false;
    }else{
      this.isWatching = true;
      this.subscription = this.bidService.watchProduct(this.product.id)
        .subscribe(
          products => this.currentBid = products.find((p: any) => p.productId === this.product.id).bid,
          error => console.log(error)
        );
    }
  }
}
