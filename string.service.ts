import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  countCapitalCharacters(input: string): number {
    if (!input) return 0;
    return input.split('').filter(char => char >= 'A' && char <= 'Z').length;
  }
}
