import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { Deudores } from '../interfaces/deudores.interface';
import { DeudoresService } from '../services/deudores.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {


constructor(private deudoresService:DeudoresService){}

get deudores(): Deudores[]{
  return [...this.deudoresService.deudores]
}

onDeleteDeudor(id: string): void {
  this.deudoresService.onDeleteDeudor( id)
}

addDeudor(deudor: Deudores): void {
  this.deudoresService.addDeudor(deudor)
}

}
