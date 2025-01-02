import { Routes } from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

export const routes: Routes = [
  {
    'path': '', component:ClienteComponent

  },
  {
    'path': 'footer', component:FooterComponent
  },
  {
    'path': 'header', component:HeaderComponent
  }
];
