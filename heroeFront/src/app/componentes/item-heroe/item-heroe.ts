import { Component, computed, input } from '@angular/core';
import { Heroe, Poder } from '../../compartido/interfaces/heroeI';

@Component({
  imports: [],
  selector: 'app-item-heroe',
  styleUrl: './item-heroe.css',
  templateUrl: './item-heroe.html',
})
export class ItemHeroe {
  heroe = input.required<Heroe>()

  esVillano = computed(() => this.heroe().bando === 'malo')

  decrementarPoder(poder: Poder) {
    if (this.heroe().poderes[poder] > 0) {
      this.heroe().poderes[poder]--;
    }
  }

  incrementarPoder(poder: Poder) {
    if (this.heroe().poderes[poder] <100) {
      this.heroe().poderes[poder]++;
    }
  }
}
