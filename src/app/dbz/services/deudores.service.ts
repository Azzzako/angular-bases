import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Deudores } from '../interfaces/deudores.interface';

@Injectable({ providedIn: 'root' })
export class DeudoresService {
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

  public deudores: Deudores[] = [{
    id: uuid(),
    nombre: "Marco",
    monto: 1500
  },
  {
    id: uuid(),
    nombre: "Jorge",
    monto: 4000,
  }, {
    id: uuid(),
    nombre: "Jaime",
    monto: 8000
  }]

  addDeudor(deudor: Deudores): void {
    const newDeudor: Deudores = {
        id: uuid(),
        ...deudor
    }
    this.deudores.push(newDeudor)
  }

  // onNewCharacter(character: Character): void {
  //   this.characters.push(character)
  // }

  onDeleteDeudor(id: string) {
    this.deudores = this.deudores.filter(deudor => id !== deudor.id)
  }

}
