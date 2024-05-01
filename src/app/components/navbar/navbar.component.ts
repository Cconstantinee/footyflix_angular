import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  @Output() clickEvent=new EventEmitter<string>();
 
  constructor(public authService:AuthService){}
  
  main_clicked(message:string){

    this.clickEvent.emit(message);
    
  }
 logout(message:string): void {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      this.clickEvent.emit('Logging out...'); 
      this.authService.logout(); 
    }
  }
}
