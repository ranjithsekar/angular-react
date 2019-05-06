import { Component} from '@angular/core';

@Component({
  selector: 'property-binding',
  template: `<h2><b>Property Binding:</b></h2>
              First Name: {{ firstname }} <br>
              Last Name: {{ lastname }} <br>
              Age: <input type='text' [value]='age'> <br>
              About Me: <span [innerHtml]='aboutme'></span><br><br>
              <button bind-disabled='login'>Login</button> <br><br>
              <button [disabled]='reset'>Reset</button><br><br>
              Message: {{message}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PropertyBindingComponent {
  firstname = 'Roger';
  lastname = "Federer";
  age = 30;
  aboutme = "I am a World class Tennis Player";
  login: boolean = false;
  reset: boolean = true;
  message: string = 'welcome to property binding!!!';

  
}
























/**template: `First Name: {{ firstname }} <br>
              Last Name: {{ lastname }} <br>
              Age: <input type='text' [value]='age'> <br>
              About Me: <p [innerHtml]='aboutme'></p>
              <button bind-disabled='login' >Login</button> <br><br>
              <button bind-disabled='reset' >Reset</button>` */
