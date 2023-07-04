import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input()
  
  pokemonType: any;

  imageUrl: String;

  amount: number;

  categoryType: string;

  constructor() { }

  ngOnInit(): void {
    console.log('PokemonType', JSON.stringify(this.pokemonType));
    this.imageUrl =`https://ui-avatars.com/api/?font-size=0.33&size=300&name=${this.pokemonType.name}`;
    //Get ID from URl
    //https://pokeapi.co/api/v2/type/${id}
    //SOl1: this.categoryType = this.pokemonType.split('/')[6];
    this.categoryType = this.pokemonType.url.slice(0,-1).split('/').pop();
    //console.log('categoryType', this.categoryType);
  }

}
