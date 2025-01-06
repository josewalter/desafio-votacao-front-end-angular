import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SessaoComponent } from "../sessao/sessao.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ClienteComponent } from "../cliente/cliente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ClienteComponent, FooterComponent, FormsModule, SessaoComponent, RouterModule,
            NavbarComponent, RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-votacao-front-end-angular';
}
