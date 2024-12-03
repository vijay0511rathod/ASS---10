import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  result: number = 0;

  constructor(private StringService: StringService) {}

  countCapitals() {
    const hardcodedString = 'Hello World! This is Angular.';
    this.result = this.StringService.countCapitalCharacters(hardcodedString);
  }

}
