import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraininfoComponent } from './traininfo/traininfo.component';
import { TrainlocationComponent } from './trainlocation/trainlocation.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { AgmCoreModule } from '@agm/core';
import { TrainsearchComponent } from './trainsearch/trainsearch.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TraininfoComponent,
    TrainlocationComponent,
    MenuComponent,
    TrainsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
