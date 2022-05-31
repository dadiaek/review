import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { InventoryComponent } from './inventory/inventory.component';
import {HighlightDirective} from "./directives/highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
