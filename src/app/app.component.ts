import { Component } from '@angular/core';
//decorator 
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = "Future Events";
  subTitle = "You can use this Boiler Plate for all the Angular projects!";
}