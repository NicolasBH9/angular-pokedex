import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonIds: any[];

  constructor(
    private pokemonService: PokemonService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe( {
        next: (data) => {
          this.pokemonIds = [];
          data.results.forEach((item: any) => {
            this.pokemonIds.push(
              item.url.slice(0, -1).split('/').pop()
            );
          });
        },
      });
    };
  
}
