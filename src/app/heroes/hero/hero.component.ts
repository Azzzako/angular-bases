import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name: string = "peter parker";
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDEscription():string{
    return `${this.name } - ${this.age}`
  }

  changeHero():void{
    this.name = "HulkHogan"
  }

  changeAge():void{
    this.age = 29
  }

  resetForm():void{
    this.name = "peter parker";
    this.age = 49
  }

}
