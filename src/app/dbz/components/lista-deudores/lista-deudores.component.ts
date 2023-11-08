import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Deudores } from '../../interfaces/deudores.interface';

@Component({
  selector: 'lista-deudores',
  templateUrl: './lista-deudores.component.html',
  styleUrls: ['./lista-deudores.component.css']
})
export class ListaDeudoresComponent {
  @Input()
  public deudoresList: Deudores[] = []

  @Output()
  deleteDeudor: EventEmitter<string> = new EventEmitter()

  deleteDeudorById(id: string):void{
    this.deleteDeudor.emit(id)
  }
}
