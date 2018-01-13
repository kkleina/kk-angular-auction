import {Component} from '@angular/core';
import {Product, ProductService} from '../../services/product-service';

@Component({
  selector: 'auction-home-page',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css']
})

export default class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService){
    this.products = this.productService.getProducts();
  }
}
