import { element } from 'protractor';
import { ApiService } from './../api.service';
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

  }

  ConsultaTodosApontamentos()
  {
    this.apiService.ConsultaTodosApontamentos().subscribe((data: PeriodicElement[]) => {
      this.ELEMENT_DATA = data;
    });
    console.log(this.ELEMENT_DATA);
  }

  novoApontamento()
  {
      if(!(this.ELEMENT_DATA[0].data.toLocaleDateString() == this.timeControl.toLocaleDateString()))
      {
           const apontamento: PeriodicElement = {data: new Date(),
                                                 dia: this.getDiaDaSemana(new Date().getDay()),
                                                 inicio: '08:00',
                                                 intervalo: '12:00',
                                                 retorno: '13:30',
                                                 fim: '17:30'};
            this.ELEMENT_DATA.unshift(apontamento);
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
