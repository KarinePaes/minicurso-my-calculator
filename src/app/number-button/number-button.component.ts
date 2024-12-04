import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-button',
  imports: [],
  templateUrl: './number-button.component.html',
  styleUrl: './number-button.component.css'
})
export class NumberButtonComponent {

  @Input()
  number: number = 0;

  @Output() numberClick = new EventEmitter<number>();

  numberClicked(value: number) {
    this.numberClick.emit(value);
  }
}
