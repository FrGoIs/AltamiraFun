import { Component, Input, OnInit } from '@angular/core';
import { Respuesta } from '../models/interfaces';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() respuesta: Respuesta;
  @Input() showAnswer = false;
  constructor() { }

  ngOnInit(): void {
  }

}
