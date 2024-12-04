import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-math-button',
  imports: [CommonModule],
  templateUrl: './math-button.component.html',
  styleUrl: './math-button.component.css'
})
export class MathButtonComponent {
  @Input()
  symbol: string = '+';

  @Output() symbolClick = new EventEmitter<string>();

  symbolClicked(value: string){
    this.symbolClick.emit(value);
  }
}
