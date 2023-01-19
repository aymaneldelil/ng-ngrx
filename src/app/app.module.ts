import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { StoreModule } from '@ngrx/store'
import { counterReducer } from './counter/state/counter.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    StoreModule.forRoot({counter: counterReducer})


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
