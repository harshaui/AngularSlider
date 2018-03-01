import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {SliderModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { SliderComponent } from './slider/slider.component';
import { SliderServiceService } from './slider-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SliderModule
  ],
  providers: [SliderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
