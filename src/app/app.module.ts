import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TiposComponent } from './components/tipos/tipos.component';
import { SingleComponent } from './components/single/single.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/home/header/header.component';
import { CardComponent } from './components/home/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiposComponent,
    SingleComponent,
    AboutComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
