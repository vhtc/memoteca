import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  imports: [NgClass],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Tuy',
    modelo: 'modelo3'
  }

  larguraPensamento():String{
    if (this.pensamento.conteudo.length >=256){
      return 'this.pensamento-g'
    }
    return 'this.pensamento-p'
  }
}
