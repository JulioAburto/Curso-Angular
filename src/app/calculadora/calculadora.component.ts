import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  operandoA = '';
  operandoB = '';
  suma = '';
  operando = 0;
  obtenerDatoA(event: Event) {
    this.operandoA = (<HTMLInputElement>event.target).value;
  }
  obtenerDatoB(event: Event) {
    this.operandoB = (<HTMLInputElement>event.target).value;
  }
  sumarOperando() {
    this.operando = parseInt(this.operandoA) + parseInt(this.operandoB);
    this.suma = this.operando.toString();
  }
}
