import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './components/application/application';
import CarouselComponent from './components/carousel/carousel';
import FooterComponent from './components/footer/footer';
import HomeComponent from './components/home/home';
import NavbarComponent from './components/navbar/navbar';
import ProductDetailComponent from './components/product-detail/product-detail';
import ProductItemComponent from './components/product-item/product-item';
import SearchComponent from './components/search/search';
import StarsComponent from './components/stars/stars';
import {ProductService} from './services/product-service';

@NgModule({
    imports: [
      BrowserModule,
      RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'products/:prodTitle', component: ProductDetailComponent}
      ])
    ],
    declarations: [
      ApplicationComponent,
      CarouselComponent,
      FooterComponent,
      HomeComponent,
      NavbarComponent,
      ProductDetailComponent,
      ProductItemComponent,
      SearchComponent,
      StarsComponent
    ],
    providers: [
      ProductService,
      {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [ ApplicationComponent ]
})
export class AppModule { }
