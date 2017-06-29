import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module'
import { ChipotleModule } from './chipotle/chipotle.module';
@NgModule({
    imports: [BrowserModule, HttpModule, AppRoutingModule, ChipotleModule, SharedModule, CarouselModule],
    declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
    bootstrap: [AppComponent, ]

})
export class AppModule { }
