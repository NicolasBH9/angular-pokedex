import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-favorite',
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss']
})
export class PokemonFavoriteComponent implements OnInit, OnDestroy {

  @Input()
  pokemonData: any;
  subscription:Subscription;
  data:any;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    let document = this.firestore
      .collection('pokemons')
      .doc(this.pokemonData.id.toString())
      .valueChanges();

   this.subscription = document.subscribe((ret:any)=>{
      console.log('favorite', JSON.stringify(ret));
      this.data = ret;
    });
  }

  markAsFavorite(value:boolean){
    this.firestore
      .collection('pokemons')
      .doc(this.pokemonData.id.toString())
      .update({
        isFavorite: value,
      })

  }

  ngOnDestroy():void{
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
