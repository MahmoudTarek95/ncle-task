import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [NavbarComponent,HomeFooterComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavbarComponent,HomeFooterComponent, ButtonComponent]
})
export class SharedModule { }
