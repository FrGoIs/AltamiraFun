import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../models/interfaces';
import { resolveResource, appDataDir } from '@tauri-apps/api/path'
// alternatively, use `window.__TAURI__.path.resolveResource`
import { readTextFile } from '@tauri-apps/api/fs'

const QUESTIONS_PATH = 'preguntas-chilp/preguntas.json';
@Component({
    selector: 'app-pregunta-respuesta', templateUrl: './pregunta-respuesta.component.html', styleUrls: ['./pregunta-respuesta.component.css']
})
export class PreguntaRespuestaComponent implements OnInit {

    private preguntas: Pregunta[] = [];
    // @ts-ignore
    public selectedQuestion: Pregunta;

    public puntaje = {
        equipo1: 0,
        equipo2: 0
    }

    constructor() {
    }

    ngOnInit(): void {
        this.getQuestionsFromFile(QUESTIONS_PATH)
    }

    async getQuestionsFromFile(path:string){
        const resourcePath = await resolveResource(path)
        const file = await readTextFile(resourcePath);
        this.preguntas = JSON.parse(file)
        return true;
    }
    public getNextQuestion(){
        const removeIndex = Math.floor(Math.random() * this.preguntas.length)
        console.log("here", removeIndex, this.preguntas.length)
        // @ts-ignore
        this.selectedQuestion = this.preguntas.splice(removeIndex,1).pop();
        console.log("selectedQuestion", this.selectedQuestion)
    }

    public resetGame(){
        // @ts-ignore
        this.selectedQuestion = undefined;
        this.getQuestionsFromFile(QUESTIONS_PATH)

    }

}
