import { Component, AfterViewInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Ajouter le script /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js
    const script1 = this.renderer.createElement('script');
    script1.src = '/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js';
    this.renderer.appendChild(document.body, script1);

    // Ajouter le script https://code.jquery.com/jquery-1.10.2.min.js
    const script2 = this.renderer.createElement('script');
    script2.src = 'https://code.jquery.com/jquery-1.10.2.min.js';
    this.renderer.appendChild(document.body, script2);

    // Ajouter le script https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js
    const script3 = this.renderer.createElement('script');
    script3.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js';
    this.renderer.appendChild(document.body, script3);

    // Vous pouvez ajouter d'autres scripts ou initialiser des fonctionnalités jQuery/Bootstrap ici
  }

  // Vos autres méthodes et propriétés de composant
}
