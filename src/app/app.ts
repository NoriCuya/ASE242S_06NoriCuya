import { Component } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tarjeta-presentacion';
}
