import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import SearchComponent from './search';
import {ProductService} from '../../services/product-service';

describe('SearchComponent', () => {
  let comp, fixture;

  beforeEach(async(() => {
    let ProductServiceStub = {
      getAllCategories(): string[] {
        return ['test category 1', 'test category 2'];
      }
    };

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchComponent],
      providers: [{ provide: ProductService, useValue: ProductServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('powinien zmieniać wartości w formularzu szukania', fakeAsync(() => {
    const testFormModel = {
      title: ['test product'],
      price: [25],
      category: ['cat 1', 'cat 2']
    }
    comp.formModel.controls['title'].setValue(testFormModel.title);
    comp.formModel.controls['price'].setValue(testFormModel.price);
    comp.formModel.controls['category'].setValue(testFormModel.category);
    expect(comp.formModel.value).toEqual(testFormModel);
  }));

  it('powinien pobrać kategorie', () => {
    let selectEl = fixture.debugElement.query(By.css('select'));
    const expectedOptions = ['test category 1', 'test category 2'];
    expect(comp.productService.getAllCategories()).toEqual(expectedOptions);
  });

});
