import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visor',
  imports: [],
  templateUrl: './visor.component.html',
  styleUrl: './visor.component.css'
})
export class VisorComponent {

  @Input()
  displayValue: string = '';
}
