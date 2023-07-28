import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';
import { PokemonAddCommentComponent } from '../pokemon-add-comment/pokemon-add-comment.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.scss']
})
export class PokemonDetailPageComponent implements OnInit {

  pokemonData:any;

  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService:PokemonService,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if(id){
        console.log('id',id)
        this.pokemonService
          .getPokemonDetails(Number(id))
          .subscribe((ret)=>{
            this.pokemonData = ret;
            console.log(JSON.stringify(this.pokemonData))
          });
      }
    });
  }

  showDialog(){
    let dialogRef = this.dialog.open(PokemonAddCommentComponent);
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(JSON.stringify(result));
      let comments = [];
      comments.push(result);
      /* Se remplazan los campos si es que no se especifica el merge:true
      this.firestore
        .collection('pokemons')
        .doc(this.pokemonData.id.toString())
        .set(
          {
          comments:comments,
          },
          {
            merge:true,
          });
      */
      /*Se mergen los campos*/
      this.firestore
        .collection("pokemons")
        .doc(this.pokemonData.id.toString())
        .update({
          coments:comments,
        });
    });
  }

}
