import { Component } from '@angular/core';
import { Heroe } from '../../compartido/interfaces/heroeI';
import { ItemHeroe } from '../item-heroe/item-heroe';

@Component({
  imports: [ItemHeroe],
  selector: 'app-lista-heroe',
  styleUrl: './lista-heroe.css',
  templateUrl: './lista-heroe.html',
})
export class ListaHeroe {
  heroes: Heroe[] = [{
      id: 0,
      nombre: 'Supeman',
      poderes: {
        velocidad: 95,
        fuerza: 5,
        inteligencia: 50,
        resistencia: 78,
        combate: 89,
      },
      imagen: '',
      bando: 'malo'
    },
  {
    id: 1,
      nombre: 'Supeman2',
      poderes: {
        velocidad: 85,
        fuerza: 51,
        inteligencia: 50,
        resistencia: 78,
        combate: 79,
      },
      imagen: '',
      bando: 'malo'
    },
    {
      id: 3,
      nombre: 'JAJA',
      poderes: {
        velocidad: 85,
        fuerza: 51,
        inteligencia: 50,
        resistencia: 78,
        combate: 79,
      },
      imagen: '',
      bando: 'malo'
    }
  ]
}
