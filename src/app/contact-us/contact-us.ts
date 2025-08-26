import { Component, OnInit, OnDestroy, Inject, Renderer2, DOCUMENT } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [ RouterLink ],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs implements OnInit, OnDestroy {
    constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }
  
  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'contact-us-active');
  }
  
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'contact-us-active');
  }
}
