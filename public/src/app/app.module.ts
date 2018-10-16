
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
import { FppComponent } from './fpp/fpp.component';
import { GppComponent } from './gpp/gpp.component';
import { TaskComponent } from './gpp/task/task.component';
import { HppComponent } from './hpp/hpp.component';
import { CakeComponent } from './hpp/cake/cake.component';
import { JppComponent } from './jpp/jpp.component';
import { EachcakeComponent } from './jpp/eachcake/eachcake.component';
import { OnecakeComponent } from './jpp/onecake/onecake.component';

@NgModule({
  declarations: [ AppComponent,
                  BppComponent,
                  CppComponent,
                  DppComponent,
                  EppComponent,
                  FppComponent,
                  GppComponent,
                  TaskComponent,
                  HppComponent,
                  CakeComponent,
                  JppComponent,
                  EachcakeComponent,
                  OnecakeComponent, ],

  imports:      [ BrowserModule, 
                  HttpClientModule, 
                  FormsModule,
                ],

  providers:    [ AppService, ],
  
  bootstrap:    [ AppComponent, ]
})

export class AppModule { }

