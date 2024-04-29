import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {

@Output() messageEvent= new EventEmitter();
  backToHome() {
  this.messageEvent.emit('open_main_page');
  console.log("button clicked, event sent");
}

}
