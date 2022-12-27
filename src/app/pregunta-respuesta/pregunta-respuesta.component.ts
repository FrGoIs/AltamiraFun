import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../models/interfaces';

@Component({
    selector: 'app-pregunta-respuesta', templateUrl: './pregunta-respuesta.component.html', styleUrls: ['./pregunta-respuesta.component.css']
})
export class PreguntaRespuestaComponent implements OnInit {

    public preguntas: Pregunta[] =  [{
        enunciacion: "esta es una pregunta", respuestas: [{
            texto: "texto Prueba", valor: 100
        }]
    }];

    constructor() {
    }

    ngOnInit(): void {}

}
