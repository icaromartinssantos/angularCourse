import { element } from 'protractor';
import { ApiService } from './../api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { empty } from 'rxjs';

export interface PeriodicElement {
  CodEmpresa  : string;
  CodUsuario  : number;
  apDate      : Date  ;
  ApInicio    : string;
  ApIntervalo : string;
  ApRetorno   : string;
  ApFim       : string;
  ApDia       : string;
}



@Component({
  selector: 'app-apontamento',
  templateUrl: './apontamento.component.html',
  styleUrls: ['./apontamento.component.css']
})
export class ApontamentoComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[];

  displayedColumns: string[] = ['data', 'dia', 'inicio', 'intervalo', 'retorno', 'fim'];

  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  timeControl: Date;

  temNovoApontamento: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.timeControl = new Date();
    this.temNovoApontamento = false;
    this.ConsultaTodosApontamentos();
    this.dataSource._updateChangeSubscription();
  }

  ConsultaTodosApontamentos() {

    this.apiService.ConsultaTodosApontamentos().subscribe((data: any[]) => {
      data.forEach(d => {
        d.apInicio = d.apInicio.substring(11, 16);
        d.apIntervalo = d.apIntervalo.substring(11, 16);
        d.apRetorno = d.apRetorno.substring(11, 16);
        d.apFim = d.apFim.substring(11, 16);
        d.apDia =  d.apDate;
      });
      this.ELEMENT_DATA = data;
      this.dataSource.data = this.ELEMENT_DATA;
      console.log(this.dataSource.data);
    });

  }

  novoApontamento() {
    if (this.dataSource.data[0] != null) {if (!(this.dataSource.data[0].apDate === this.timeControl)) {return null; }}
    const apontamento: PeriodicElement = {CodEmpresa  : '01',
                                          CodUsuario  : 1,
                                          apDate      : this.timeControl,
                                          ApInicio    : '08:00',
                                          ApIntervalo : '12:00',
                                          ApRetorno   : '13:30',
                                          ApFim       : '17:30',
                                          ApDia       : this.getDiaDaSemana(this.timeControl.getDay())};
    this.ELEMENT_DATA.unshift(apontamento);
    this.dataSource.data = this.ELEMENT_DATA;
    this.dataSource._updateChangeSubscription();
    this.temNovoApontamento = true;
  }

  gravarApontamento()
  {
    this.apiService.InserirApontamentos(this.dataSource.data[0]).subscribe((inseriu: Boolean) => {
        console.log(inseriu);
    });
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
