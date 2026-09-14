import { Component, signal } from '@angular/core';
import { ListaHeroe } from './componentes/lista-heroe/lista-heroe';

@Component({
  imports: [ListaHeroe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('heroeFront');
}
