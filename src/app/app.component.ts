import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberButtonComponent } from "./number-button/number-button.component";
import { MathButtonComponent } from './math-button/math-button.component';
import { VisorComponent } from './visor/visor.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NumberButtonComponent, MathButtonComponent, VisorComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  number: number = 0;
  symbol: string = '-';
  displayValue: string = '';
  result: string = '';
  flagResult: boolean = false;

  changeNumber(value: number){
    this.number = value;
    this.addNumber(value);
    this.flagResult = false;
  }

  changeSymbol(value: string){
    this.symbol = value;
    if(value==='del'){
      this.flagResult = false;
      this.delete();
    } 
    if(value==='='){
      this.flagResult = true;
      this.calculate();
    }
    if(value==='+' || value==='-' || value==='*'|| value==='/') {
      this.flagResult = false;
      this.addSymbol(value);
    }
  }

  addNumber(value: number) {
    this.flagResult = false;
    this.displayValue += value.toString();
  }

  addSymbol(value: string){
    this.displayValue += value;
  }

  delete(){
    this.displayValue = '';
  }

  calculate(){
    this.result = eval(this.displayValue);
    this.displayValue = this.result;
  }
}
