import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
    private socket;

    constructor() { }
  
    // connect(): Rx.Subject<MessageEvent> {
    //   this.socket = io('https://olx-back.herokuapp.com/');
  
    //   let observable = new Observable(observer => {
    //       this.socket.on('message', (data) => {
    //         console.log("Received message from Websocket Server")
    //         observer.next(data);
    //       })
    //       return () => {
    //         this.socket.disconnect();
    //       }
    //   });
      
    //   // We define our Observer which will listen to messages
    //   // from our other components and send messages back to our
    //   // socket server whenever the `next()` method is called.
    //   let observer = {
    //       next: (data: Object) => {
    //           this.socket.emit('message', JSON.stringify(data));
    //       },
    //   };
  
    //   // we return our Rx.Subject which is a combination
    //   // of both an observer and observable.
    //   return Rx.Subject.create(observer, observable);
    // }

}
