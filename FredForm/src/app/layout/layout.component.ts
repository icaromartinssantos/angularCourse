import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  itensMenu: any =
  [
    {
      nome: 'Inicio',
      icon: 'home',
      rota: '/'
    },
    {
      nome: 'Apontamento',
      icon: 'assignment',
      rota: '/apontamento'
    }
  ];

  titulo: string;

  constructor(route: Router){

    route.events.subscribe((res) => {
      this.titulo = route.url.slice(1).toUpperCase();
    });
  }

  ngOnInit() {

  }

}
