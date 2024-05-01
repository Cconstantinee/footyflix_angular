import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { PlayersService } from '../../services/player-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/authentication.service';

interface PlayerInfo {
  pseudo: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isActive: boolean = false;
  
  registerForm: FormGroup;
  loginForm: FormGroup;
  errorMessage:string=''
  @Output() messageEvent= new EventEmitter();

  constructor(private playersService: PlayersService, private fb: FormBuilder,private snackBar: MatSnackBar,private authService:AuthService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3), Validators.pattern('[a-zA-Z0-9_]+')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3), Validators.pattern('[a-zA-Z0-9_]+')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    // Event handling directly in the template is recommended instead of querying the DOM
  }

 

  signUpToggle() {
    this.isActive =!this.isActive; // Activate the registration part of the form
    this.errorMessage='';
  }

  onSignUpSubmit() {
    if (this.registerForm.valid) {
      this.playersService.sendNewUserToAPI(this.registerForm.value).subscribe(
        (response) => {
          console.log('API Response:', response);

          if (response.hasOwnProperty('success')) {
            // User created successfully
            this.showRegisterSuccessMessage();
            this.registerForm.reset(); // Reset form
            this.signUpToggle();
          } else if (response.hasOwnProperty('error')) {
            // Check for specific error message
            if (response.error === 'username or email already used!') {
              this.errorMessage = response.error;
            } else {
              this.errorMessage = 'An error occurred while registering the user.';
            }
          }
        },
        (error) => {
          console.log('Error:', error);
          this.errorMessage = 'An error occurred while sending the request.';
        }
      );
    } else {
      this.errorMessage = 'Invalid inputs. Please check the form.';
    }
  }
  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successful!', response);
          this.showLoginSuccessMessage();
          this.messageEvent.emit('open_main_page');
        },
        (error) => {
          console.error('Login error:', error);
          if (error.status === 401 && error.error && error.error.message) {
            this.errorMessage = error.error.message;
          } else {
            this.errorMessage = 'Failed to login. Invalid credentials probebly.';
          }
          this.loginForm.reset();
        }
      );
    } else {
      this.errorMessage = 'Invalid inputs';
    }
  }





//snackbar not working :'(
showLoginSuccessMessage() {
  this.snackBar.open('Login successful', 'Close', {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: ['success-snackbar'] // Custom CSS class for styling
  });
}
showRegisterSuccessMessage() {
  this.snackBar.open('register successful', 'Close', {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: ['success-snackbar'] // Custom CSS class for styling
    
  });
}
}