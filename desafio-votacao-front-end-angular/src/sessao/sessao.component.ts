import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sessao } from '../app/modelo/Sessao';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SessaoService } from './../app/servico/sessao.service';

@Component({
  selector: 'app-sessao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sessao.component.html',
  styleUrl: './sessao.component.css',
})
export class SessaoComponent {
  sessao = new Sessao();

  btnCadastrar: boolean = true;

  tabela:boolean = true;

  sessoes: Sessao[] = [];

  constructor(private servico:SessaoService) {}

  selecionar(): void{
    this.servico.selecionar()
    .subscribe(retorno => this.sessoes = retorno);
  }

  cadastrar():void {
    this.servico.cadastrar(this.sessao)
    .subscribe(retorno => {this.sessoes.push(retorno);

    this.sessao = new Sessao();

    alert('Sessão salva com sucesso!');
    });
  }

  //Método para selecionar uma sessão específico
  selecionarSessao(posicao:number):void{
    this.sessao = this.sessoes[posicao];
    this.btnCadastrar =false;

    this.tabela = false;
  }

  // Método de inicialização
  ngOnInit(): void {
    this.selecionar();
  }

}
