import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntaRespuestaComponent } from './pregunta-respuesta.component';



@NgModule({
  declarations: [PreguntaRespuestaComponent],
  exports: [
    PreguntaRespuestaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PreguntaRespuestaModule { }
