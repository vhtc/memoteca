import { Component } from '@angular/core';
import { CabecalhoComponent } from "../../cabecalho/cabecalho.component";
import { AppModule } from '../../../app.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  imports: [AppModule, RouterLink],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  criarPensamento() {
    alert("Novo Pensamento criado!")
  }

  cancelarPensamento(){
    alert("Novo Pensamento cancelado!")
  }
}