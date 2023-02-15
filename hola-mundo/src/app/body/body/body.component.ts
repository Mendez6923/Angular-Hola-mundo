import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  mostrar = true;

  frase:any = {
    autor:"jose",
    mensaje:'Hola amigo'
  }

  personajes:string[]= ['Spiderman','Venon','Capitan america'];
  constructor() { }

  ngOnInit(): void {
  }

}
