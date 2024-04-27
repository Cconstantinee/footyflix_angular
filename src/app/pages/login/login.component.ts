import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isActive: boolean = false;
  username: string = '';
  password: string = '';

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
}
