import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameHostComponent } from './game-host.component';
import { AnswerModule } from '../answer/answer.module';



@NgModule({
  declarations: [GameHostComponent],
  exports: [
    GameHostComponent
  ],
  imports: [
    CommonModule,
    AnswerModule
  ]
})
export class GameHostModule { }
