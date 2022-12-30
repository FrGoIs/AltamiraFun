import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Respuesta } from '../models/interfaces';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, OnChanges {

  @Input() respuesta: Respuesta;
  @Input() showAnswer = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.processAnswer()
  }
  processAnswer(){
    const dotsToAdd = 31 - this.respuesta.texto.length;
    for (let i = 0 ; i < dotsToAdd; i++){
      this.respuesta.texto += ' .';
    }
  }
}
