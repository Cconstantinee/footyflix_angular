import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  showtable: String="Players";
  
  
  switchtab(condition: String) {
    console.log("button clicked",condition);
  switch (condition) {
    case "Players": 
      this.showtable="Players";
      break;
    case "Teams":
      this.showtable="Teams";
      break;
      case "Stadiums":
      this.showtable="Stadiums";
      break;
    default:
      break;
  }
}

}
