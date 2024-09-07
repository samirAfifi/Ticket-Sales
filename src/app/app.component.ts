import { Component } from '@angular/core';
import { LanguageService } from './language.service';
LanguageService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public languageService: LanguageService) {
    this.languageService.applyDirection('rtl');
    this.toggleLanguage(); 
  }
  toggleLanguage() {
    this.languageService.toggleDirection();
  }
}
