import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public label1: string[] = ['Compras realizadas']


  constructor() { }

  ngOnInit(): void {
  }
}
