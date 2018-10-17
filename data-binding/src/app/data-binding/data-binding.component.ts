import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  url: string = 'http://google.com';

  cursoAngular: boolean = true;

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  urlImagem = 'https://picsum.photos/200/300';

  nomeDoCurso: string = 'Angular';

  getValor()
  {
    return 1;
  }

  getCurtirCurso()
  {
    return true;
  }
  
  botaoClicado(){
    alert('Botao clicado!');
  }

  OnKeyUp(evento: KeyboardEvent){
    this.valorAtual =  (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){

    if(this.isMouseOver == false)
      this.isMouseOver = true;
    else
      this.isMouseOver = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
