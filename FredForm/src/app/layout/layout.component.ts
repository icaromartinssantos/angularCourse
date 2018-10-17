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
      nome: "Inicio",
      icon: "home"
    },
    {
      nome: "Apontamento",
      icon: "assignment"
    }
];

  constructor() { }

  ngOnInit() {
  }

}
