import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CurrentYearComponent } from './shared/current-year/current-year.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import { PropertyGroupComponent } from './property-group/property-group.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CurrentYearComponent,
    PropertiesListComponent,
    AddNewPropertyComponent,
    PropertyGroupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
