
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService   } from './app.service';

import { BppComponent } from './bpp/bpp.component';
import { CppComponent } from './cpp/cpp.component';
import { DppComponent } from './dpp/dpp.component';

@NgModule({
  declarations: [ AppComponent,
                  BppComponent,
                  CppComponent,
                  DppComponent, ],
  imports:      [ BrowserModule, 
                  HttpClientModule, ],
  providers:    [ AppService, ],
  bootstrap:    [ AppComponent, ]
})

export class AppModule { }

