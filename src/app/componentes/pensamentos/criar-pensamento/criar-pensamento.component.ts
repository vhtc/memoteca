import { Component } from '@angular/core';
import { CabecalhoComponent } from "../../cabecalho/cabecalho.component";

@Component({
  selector: 'app-criar-pensamento',
  imports: [],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

}