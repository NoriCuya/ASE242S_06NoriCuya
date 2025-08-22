import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.html',
  styleUrls: ['./tarjeta.css']
})
export class TarjetaComponent {
  nombre = 'Nori Cuya Merlo';
  carrera = 'Análisis de Sistemas Empresariales';
  edad = 19;
  correo = 'nori.cuya.merlo@vallegrande.edu.pe';

  mostrarExtra = false;
  colorFondo = '#D8B4FF';

  hobbies: string[] = ['Mirar series', 'Jugar vóley'];
  skills: string[] = ['Sociable'];
  frase = 'Siempre positiva y sociable 😄';

  toggleExtra() {
    this.mostrarExtra = !this.mostrarExtra;
  }

  cambiarColor() {
    this.colorFondo = this.colorFondo === '#D8B4FF' ? '#A78BFA' : '#D8B4FF';
  }
}
