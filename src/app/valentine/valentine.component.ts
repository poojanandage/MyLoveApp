import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ],
  templateUrl: './valentine.component.html',
  styleUrl: './valentine.component.scss'
})
export class ValentineComponent {
  showHeart = false;
  showMessage = false;
  //  noX = 50;
  // noY = 60;

  constructor(private route : Router){}

  startSurprise() {
    this.showHeart = true;
  }

  revealMessage() {
    this.showMessage = true;
    this.showHeart = false
  }

  noX = 150; // initial position
  noY = 50;
  speed = 200; 
  noWidth = 100;   // width of the No button in px
noHeight = 50; // milliseconds for CSS transition

moveNo() {
  // Get viewport size
  // const maxWidth = window.innerWidth - this.noWidth;  // prevent overflowing right
  // const maxHeight = window.innerHeight - this.noHeight; // prevent overflowing bottom
const container = document.querySelector('.buttons') as HTMLElement;
const maxWidth = container.clientWidth - this.noWidth;
const maxHeight = container.clientHeight - this.noHeight;
  // Random position within bounds
  this.noX = Math.floor(Math.random() * maxWidth);
  this.noY = Math.floor(Math.random() * maxHeight);

  // Optional: speed up slightly each time
  this.speed = Math.max(50, this.speed - 10);

  // Apply smooth transition
  const btn = document.querySelector('.no') as HTMLElement;
  if (btn) {
    btn.style.transition = `all ${this.speed}ms ease`;
  }
}


  accept() {
    this.route.navigate(['/surprise'])
    this.showHeart = false
  }
}

