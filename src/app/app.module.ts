import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { PizzaSizesComponent } from './pizza-sizes/pizza-sizes.component';
import { TotalComponent } from './total/total.component';
import { PizzaTableComponent } from './pizza-table/pizza-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ToppingsComponent,
    PizzaSizesComponent,
    TotalComponent,
    PizzaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
