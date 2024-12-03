import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  result: number = 0;
  constructor(private ArithmeticService: ArithmeticService) {}

  performAddition(a: number, b: number): void {
    this.result = this.ArithmeticService.add(a, b);
  }

  performSubtraction(a: number, b: number): void {
    this.result = this.ArithmeticService.subtract(a, b);
  }

  performmultplication(a: number, b: number): void {
    this.result = this.ArithmeticService.multplication(a, b);
  }

  reset(num1: HTMLInputElement, num2: HTMLInputElement): void {
    num1.value = ''; 
    num2.value = ''; 
    
    
  }
  
}
