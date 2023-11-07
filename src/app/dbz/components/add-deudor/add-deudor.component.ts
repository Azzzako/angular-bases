import { Component, EventEmitter, Output } from '@angular/core';
import { Deudores } from '../../interfaces/deudores.interface';

@Component({
  selector: 'app-add-deudor',
  templateUrl: './add-deudor.component.html',
  styleUrls: ['./add-deudor.component.css']
})

export class AddDeudorComponent {

  @Output()
  public addDeudor: EventEmitter<Deudores> = new EventEmitter()

  public deudor: Deudores = {
    nombre: "",
    monto: 0
  }

  emitDeudor():void{
    console.log(this.deudor);
    this.addDeudor.emit({...this.deudor})
    this.deudor = {
      nombre: "",
      monto: 0
    }
  }
}
