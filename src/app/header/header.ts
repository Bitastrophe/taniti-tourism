import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, RouterLinkActive, FontAwesomeModule ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  faBars = faBars;
  faXmark = faXmark;

  @ViewChild('menu') menu!: ElementRef;
  isBars = true;
  isMenuOpen = false;
  
  toggleMenu(): void {
    this.isBars = !this.isBars;
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu(): void {
    this.isBars = true
    this.isMenuOpen = false;
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.menu.nativeElement.contains(event.target) && this.isMenuOpen) {
      this.closeMenu();
    }
  }
  
  handleMenuClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
