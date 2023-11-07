import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ["Spiderman", "Hulk", "Thor", "Ironman"]
  public deletedHero?: string;
  public herosMap?: string[];
  public apiResponse?: any;

  constructor() { }

  ngOnInit (): void {
    axios.get(`https://api.escuelajs.co/api/v1/products`)
    .then(response => {
      this.apiResponse = response.data
    })
  }

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop()
  }

  searchHulk(): string[] {
    const res = this.heroNames.map(hero => hero.toUpperCase())
    return res
  }


}


