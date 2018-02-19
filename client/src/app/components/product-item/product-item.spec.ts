import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {Product} from '../../services/product-service';
import {RouterTestingModule} from '@angular/router/testing';
import ProductItemComponent from './product-item';
import StarsComponent from '../stars/stars';

describe('ProductItemComponent', () => {
  let comp: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let expectedProduct: Product;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductItemComponent, StarsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    comp = fixture.componentInstance;

    expectedProduct = new Product(1, 'Test product', 25, 4, 'Test description', ['cat1', 'cat2']);
    comp.product = expectedProduct;
    fixture.detectChanges();
  });

  it('powinien wyświetlić cenę', () => {
    let priceEl = fixture.debugElement.query(By.css('.price'));
    const expectedPrice = expectedProduct.price;
    expect(priceEl.nativeElement.textContent).toContain(expectedPrice);
  });

  it('powinien wyświetlić ocenę', () => {
    let ratingsEl = fixture.debugElement.query(By.css('.ratings'));
    const expectedRatings = expectedProduct.rating;
    expect(ratingsEl.nativeElement.textContent).toContain(expectedRatings);
  });

  it('powinien prowadzić do szczegółów produktu', () => {
    let urlEl = fixture.debugElement.query(By.css('a'));
    const expectedUrl = '/products/'+expectedProduct.id;
    expect(urlEl.nativeElement.getAttribute('href')).toEqual(expectedUrl);
  });

});
