import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  constructor() {
  }

  letters: { letter: string, active: boolean }[] = [
    {letter: 'A', active: false},
    {letter: 'B', active: false},
    {letter: 'C', active: false},
    {letter: 'D', active: false},
    {letter: 'E', active: false},
    {letter: 'F', active: false},
    {letter: 'G', active: false},
    {letter: 'H', active: false},
    {letter: 'I', active: false},
    {letter: 'J', active: false},
    {letter: 'K', active: false},
    {letter: 'L', active: false},
    {letter: 'M', active: false},
    {letter: 'N', active: false},
    {letter: 'O', active: false},
    {letter: 'P', active: false},
    {letter: 'Q', active: false},
    {letter: 'R', active: false},
    {letter: 'S', active: false},
    {letter: 'T', active: false},
    {letter: 'U', active: false},
    {letter: 'V', active: false},
    {letter: 'W', active: false},
    {letter: 'X', active: false},
    {letter: 'Y', active: false},
    {letter: 'Z', active: false},
  ];
}
