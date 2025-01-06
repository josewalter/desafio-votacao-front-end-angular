import { Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SessaoComponent } from '../sessao/sessao.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { NavbarComponent } from '../navbar/navbar.component';

export const routes: Routes = [
  {
    path: 'navbar', component:NavbarComponent
  },
  {
    path: 'cliente', component:ClienteComponent

  },
  {
    path: 'header', component:HeaderComponent
  },
  {
    path: 'footer', component:FooterComponent
  },
  {
    path: 'sessao', component:SessaoComponent
  },
  {
    path: '', redirectTo: 'paginaPrincipal', pathMatch: 'full'

  },
];
