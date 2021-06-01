import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  morning() {
    return "Good Morning!!!";
  }

  evening() {
    return "Good Evening!!!";
  }

  night() {
    return "Good Night!!!"
  }

}