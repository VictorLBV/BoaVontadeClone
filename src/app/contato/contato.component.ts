import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  assuntos =
  [
    'Pedido de Prece',
    'Produtos',
    'TBV',
    'LBV',
    'Trabalhe Conosco',
    'Boa Vontade TV',
    'Super RBV',
    'Outros'
  ];

  estados =
  [
    'AC','AL','AM','AP','BA','CE','DF','GO',
    'ES','MA','MG','MS','MT','PA','PB','PE',
    'PI','PR','RJ','RN','RO','RR','RS','SC',
    'SE','SP','TO'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
