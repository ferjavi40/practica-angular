import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  consola: String;//esta es la variable que se usa para el input Swicht
  numero:number;
  plataforma: String;

}
