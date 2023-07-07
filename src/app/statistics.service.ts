import { Injectable } from '@angular/core';
import {webSocket} from 'rxjs/webSocket'
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private socket:any; 
  public battleStatisticsMessage = new Subject<string>();

  //Subject -> Convertir infromación en stream
  // .next -> Enviar información
  // .complete -> Cerrar
  // .subscribe -> Subscribirse al subject
  // .error -> Notificar errores

  constructor() { }

  public connect(): void{
    this.socket = this.getNewWebSocket();
    this.socket.subscribe({
      next:(data:any)=>{
        this.battleStatisticsMessage.next(JSON.stringify(data))
      }
    })

  }

  private getNewWebSocket(){
    return webSocket(environment.pokeStatisticsUrl)
  }

  close(){
    this.socket.complete();
  }
}
