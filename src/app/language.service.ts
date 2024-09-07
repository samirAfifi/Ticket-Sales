import { Renderer2, RendererFactory2 } from '@angular/core';
import {  Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private renderer: Renderer2;
  private direction: 'ltr' | 'rtl' = 'rtl';  // Set RTL as the default

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.applyDirection(this.direction); // Apply the default direction (RTL)
  }

  toggleDirection() {
    this.direction = this.direction === 'ltr' ? 'rtl' : 'ltr';
    this.applyDirection(this.direction);
  }

  applyDirection(direction: 'ltr' | 'rtl') {
    const body = document.querySelector('body');
    this.renderer.removeClass(body, 'rtl');
    this.renderer.removeClass(body, 'ltr');
    this.renderer.addClass(body, direction);
  }

  getDirection() {
    return this.direction;
    
  }
}
