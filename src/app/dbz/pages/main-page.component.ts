import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { Deudores } from '../interfaces/deudores.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {


  // public characters: Character[] = [{
  //   name: "Krilin",
  //   power: 1000
  // },
  // {
  //   name: "Goku",
  //   power: 9500
  // },
  // {
  //   name: "Vegeta",
  //   power: 9000
  // }
  // ]

  public deudores : Deudores[] = [{
    nombre: "Marco",
    monto: 1500
  },
  {
    nombre: "Jorge",
    monto: 4000
  }]

  addDeudor(deudor: Deudores): void{
    this.deudores.push(deudor)
  }

  // onNewCharacter(character: Character): void {
  //   this.characters.push(character)
  // }

  onDeleteDeudor(index: number) {
    this.deudores.splice(index, 1)
  }

}
