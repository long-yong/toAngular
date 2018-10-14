
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService   } from './app.service';

import { BppComponent } from './bpp/bpp.component';
import { CppComponent } from './cpp/cpp.component';
import { DppComponent } from './dpp/dpp.component';
import { EppComponent } from './epp/epp.component';

@NgModule({
  declarations: [ AppComponent,
                  BppComponent,
                  CppComponent,
                  DppComponent,
                  EppComponent, ],

  imports:      [ BrowserModule, 
                  HttpClientModule, 
                  FormsModule,
                ],

  providers:    [ AppService, ],
  
  bootstrap:    [ AppComponent, ]
})

export class AppModule { }

