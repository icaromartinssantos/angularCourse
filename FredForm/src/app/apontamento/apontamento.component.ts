import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


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
  selector: 'app-apontamento',
  templateUrl: './apontamento.component.html',
  styleUrls: ['./apontamento.component.css']
})
export class ApontamentoComponent implements OnInit {

  displayedColumns: string[] = ['data', 'dia', 'inicio', 'intervalo', 'retorno', 'fim'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  timeControl: Date;

  temNovoApontamento: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.timeControl = new Date();
    this.temNovoApontamento = false;
  }

  novoApontamento()
  {
      if(!(ELEMENT_DATA[0].data.toLocaleDateString() == this.timeControl.toLocaleDateString()))
      {
           const apontamento: PeriodicElement = {data: new Date(),
                                                 dia: this.getDiaDaSemana(new Date().getDay()),
                                                 inicio: '08:00',
                                                 intervalo: '12:00',
                                                 retorno: '13:30',
                                                 fim: '17:30'};
            ELEMENT_DATA.unshift(apontamento);
            this.dataSource._updateChangeSubscription();
            this.temNovoApontamento = true;
    }
  }

  gravarApontamento()
  {
    this.temNovoApontamento = false;
  }

  getDiaDaSemana(numeroDia: number)
  {
      switch(numeroDia)
      {
        case numeroDia = 0:
        {
            return 'Domingo';
        }

        case numeroDia = 1:
        {
            return 'Segunda';
        }

        case numeroDia = 2:
        {
            return 'Terça';
        }

        case numeroDia = 3:
        {
            return 'Quarta';
        }

        case numeroDia = 4:
        {
            return 'Quinta';
        }

        case numeroDia = 5:
        {
            return 'Sexta';
        }
      }
  }

}
