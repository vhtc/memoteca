import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-listar-pensamentos',
  imports: [RouterLink, RouterLinkActive, PensamentoComponent, NgFor, NgIf],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
  listaPensamentos = [
    {
    conteudo: 'Pensamento teste',
    autoria: 'Tuy',
    modelo: 'modelo3'
  },
  {
    conteudo: 'Pensamento teste 2',
    autoria: 'Tuy',
    modelo: 'modelo2'
  },
  {
    conteudo: 'Pensamento teste 2, conteudo grande que pode ser um conteudo maior que 256 char. Este conteudo deverá passar na largura maior do componente como versão de teste. Este texto foi escrito apenas para testar o tamanho do Componenete.',
    autoria: 'Tuy',
    modelo: 'modelo2'
  }
]
}
