import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/player-services.service';
interface playerInfo {
  psudo:string;
  email:string;
  password:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isActive: boolean = false;
  username: string = '';
  password: string = '';
  playerInfo: playerInfo={psudo:'',email:'',password:''};

  constructor(private playersService: PlayersService){

  }
  ngOnInit() {
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    registerLink?.addEventListener('click', () => {
      this.toggleActive(true);
    });

    loginLink?.addEventListener('click', () => {
      this.toggleActive(false);
    });
  }

  onLoginSubmit() {
    // Implémentez votre logique de connexion ici
    console.log('Formulaire de connexion soumis');
  }

  onSignUpClick() {
    this.toggleActive(true); // Active la partie du formulaire d'inscription
  }

  toggleActive(value: boolean) {
    this.isActive = value;
  }

  onSignUpSubmit() {
    console.log("sent data",this.playerInfo);
    this.playersService.sendNewUserToAPI(this.playerInfo).subscribe(
      (response)=>{console.log(response)},
      (error)=>{console.log("there was a problem",error)}
    )
    }
}
