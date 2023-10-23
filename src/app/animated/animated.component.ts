import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-animated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated.component.html',
  styleUrls: ['./animated.component.scss'],
  animations: [
    trigger('moveLeftRight', [
      state('open', style({ transform: 'translateX(1vw)' })),
      state('closed', style({ transform: 'translateX(calc(99vw - 100%))' })), // Move div 100% to the right
      transition('open => closed', animate('1s')),
      transition('closed => open', animate('0.5s')),
    ]),
  ],
})
export class AnimatedComponent {
  isMoved = true;

  toggleState() {
    this.isMoved = !this.isMoved;
  }
}
