import { Component, computed, input, output } from '@angular/core';
import { Heroe, HeroeCambioDePoderes, Poder } from '../../compartido/interfaces/heroeI';
import { KeyValuePipe, TitleCasePipe } from '@angular/common';

@Component({
  imports: [KeyValuePipe, TitleCasePipe],
  selector: 'app-item-heroe',
  styleUrl: './item-heroe.css',
  templateUrl: './item-heroe.html',
})
export class ItemHeroe {
  heroe = input.required<Heroe>()
  cambioDePoder = output<HeroeCambioDePoderes>()

  esVillano = computed(() => this.heroe().bando === 'malo')

  decrementarPoder(poder: Poder) {
    this.cambioDePoder.emit({
      heroe: this.heroe(),
      poder,
      valor: -1
    })
  }

  incrementarPoder(poder: Poder) {
    this.cambioDePoder.emit({
      heroe: this.heroe(),
      poder,
      valor: 1
    })
  }
}
