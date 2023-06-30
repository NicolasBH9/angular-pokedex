import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy{

  constructor() { }

  obs = new Observable((observer)=>{
    setTimeout(()=>{
      observer.next("1");
    }, 1000);
    setTimeout(()=>{
      observer.next("2");
    }, 2000);
    setTimeout(()=>{
      observer.next("3");
    }, 3000);
    setTimeout(()=>{
      observer.next("4");
    }, 4000);
    setTimeout(()=>{
      observer.next("4");
    }, 5000);
    
  })

  suscriber:Subscription;

  ngOnInit(): void {
   this.obs.subscribe({
    next: (value)=>console.log(value),
    error: (error) => console.log('Error en el stream', error),
    complete:() => console.log('El observer ha finalizado')
   })
   
  }

  ngOnDestroy(): void {
    if(this.suscriber){
      this.suscriber.unsubscribe();
    }
  }

}
