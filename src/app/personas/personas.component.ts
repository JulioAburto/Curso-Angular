import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  // Property Binding
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = 'Ingeniero';
  agregarPersona() {
    this.mensaje = 'Persona agregada';
  }
  // Event Binding
  // metodo que permite modificar el titulo de la persona por medio
  // del parametro Evente
  modificarTitulo(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
// Two way binding podemos comunicar desde el html hacia el componente o viceversa 