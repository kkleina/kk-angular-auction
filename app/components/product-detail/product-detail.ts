import {Component} from '@angular/core';
import {ActivatedRoute}  from '@angular/router';
import {Product, Review, ProductService} from '../../services/product-service';
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

  constructor(route: ActivatedRoute, productService: ProductService){
    let prodId: number = parseInt(route.snapshot.params['productId']);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(this.product.id);
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
}
