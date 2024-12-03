import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  number: number = 11; 
  result: boolean = false;

  constructor(private numberService: NumberService) {}

  ngOnInit(): void {
    this.result = this.numberService.isPrime(this.number);
  }

}
