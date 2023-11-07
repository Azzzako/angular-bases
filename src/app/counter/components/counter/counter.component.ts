import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{counter}}</p>
<button (click)="icreaseBy(+1)">Incrementar contador</button>
<button (click)="resetBy()">Reset</button>
<button (click)="icreaseBy(-1)">Reducir contador</button>
  `
})

export class CounterComponent {
  public counter: number = 10

  icreaseBy(value: number): void {
    this.counter += value
  }

  resetBy(): void {
    this.counter = 10
  }
}
