import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NavComponent } from "./nav.component";
import { AppRoutingModule } from "./../../app-routing.module";
@NgModule({
  declarations: [NavComponent],
  exports: [BrowserModule, NavComponent],
  imports: [
    AppRoutingModule
  ],
  providers: []
})
export class NavModule {}
