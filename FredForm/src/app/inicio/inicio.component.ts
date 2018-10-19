import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { strictEqual } from 'assert';

export interface PeriodicElement {
  dia: string;
  data: Date;
  inicio: string;
  intervalo: string;
  retorno: string;
  fim: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {data: new Date(2018, 10, 2), dia: 'Segunda', inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: null },
  {data: new Date(2018, 10, 3), dia: 'Terça',   inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: '17:30' },
  {data: new Date(2018, 10, 4), dia: 'Quarta',  inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: '17:30' },
  {data: new Date(2018, 10, 5), dia: 'Quinta',  inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: '17:30' },
  {data: new Date(2018, 10, 6), dia: 'Sexta',   inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: '17:30' },
  {data: new Date(2018, 10, 7), dia: 'Segunda', inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: '17:30' },
  {data: new Date(2018, 10, 8), dia: 'Terça',   inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: '17:30' },
  {data: new Date(2018, 10, 9), dia: 'Quarta',  inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: '17:30' },
  {data: new Date(2018, 10, 10), dia: 'Quinta', inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: '17:30' },
  {data: new Date(2018, 10, 11), dia: 'Sabado', inicio: '08:00', intervalo: '12:00', retorno: '13:30', fim: '17:30' }
];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  displayedColumns: string[] = ['data', 'dia', 'inicio', 'intervalo', 'retorno', 'fim'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

  novoApontamento()
  {
     const apontamento: PeriodicElement = {data: new Date(2018, 10, 2),
                                           dia: 'Segunda',
                                           inicio: '08:00',
                                           intervalo: '12:00',
                                           retorno: '13:30',
                                           fim: null };

      this.dataSource.push(apontamento);

      console.log(this.dataSource);
  }

}
