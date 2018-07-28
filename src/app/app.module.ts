import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ScrollPositionRoutingModule } from "./app.route";

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
  imports: [BrowserModule, ScrollPositionRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
