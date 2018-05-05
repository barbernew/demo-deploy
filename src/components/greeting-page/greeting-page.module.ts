import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {GreetingPageComponent} from "./greeting-page.component";
// import {SmoothScrollToDirective, SmoothScrollDirective} from "ng2-smooth-scroll";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModalModule} from 'ngx-bootstrap/modal';
import {AlertModule, CarouselModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
// import {HttpService} from "../../services/http.service";
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
// import {AuthorizationService} from "../../services/authefication.service";
import {AppRoutingModule} from "../../app/app-routing.module";
import {NgxCarouselModule} from 'ngx-carousel';
import 'hammerjs';

@NgModule({
  declarations: [
    GreetingPageComponent,
    // SmoothScrollToDirective,
    // SmoothScrollDirective,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    NgxCarouselModule,
  ],
  providers: [],
  bootstrap: [GreetingPageComponent]
})
export class GreetingPageModule {
}
