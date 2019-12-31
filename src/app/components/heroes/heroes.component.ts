import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

heroes:Heroe[] = [];

  constructor(private _heroesServivce:HeroesService) { 
    console.log('constructor');
    
  }

  ngOnInit() {
    this.heroes = this._heroesServivce.getHeroes();
    console.log(this.heroes);
     
  }

}
