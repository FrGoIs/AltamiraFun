import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer.component';



@NgModule({
    declarations: [
        AnswerComponent
    ],
    exports: [
        AnswerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AnswerModule { }
