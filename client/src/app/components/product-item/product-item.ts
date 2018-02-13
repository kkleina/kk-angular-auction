import {Component, Input} from '@angular/core';
import {Product} from '../../services/product-service';

@Component({
  selector: 'auction-product-item',
  styleUrls: ['product-item.css'],
  templateUrl: 'product-item.html'
})
export default class ProductItemComponent {
  @Input() product: Product;
}
