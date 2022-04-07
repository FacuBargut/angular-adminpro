import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit{


  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`
    console.log(this.btnClass)    
  } 


  @Input('valor') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';


  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter()

  cambiarValor( value: number) {
    if(this.progress >= 100 && value >= 0){
      this.progress = 100
      this.valorSalida.emit(100)
    }
    else if(this.progress <= 0 && value < 0){
      this.progress = 0
      this.valorSalida.emit(0)
    }
    else {
      this.progress = this.progress + value;
      this.valorSalida.emit(this.progress)
    }
  }

  onChange( nuevoValor: number ) {
    
    if(nuevoValor >= 100){
      this.progress = 100
    }else if ( nuevoValor <= 0){
      this.progress = 0
    }else{
      this.progress = nuevoValor
    }

    this.valorSalida.emit(this.progress)
    

  }

}
