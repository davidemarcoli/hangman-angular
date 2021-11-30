import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-input',
  templateUrl: './letter-input.component.html',
  styleUrls: ['./letter-input.component.css']
})
export class LetterInputComponent implements OnInit {

  constructor() { }

  input: string = '';

  ngOnInit(): void {
  }

}
