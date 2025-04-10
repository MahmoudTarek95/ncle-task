import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SubscribtionTutorialComponent } from './components/subscribtion-tutorial/subscribtion-tutorial.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeLayoutComponent,
    HeaderComponent,
    SubscribtionTutorialComponent,
    HomeFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
