import { Component, OnInit, OnDestroy, Inject, Renderer2, DOCUMENT } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
    constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }
  
  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'home-active');
  }
  
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'home-active');
  }
}
