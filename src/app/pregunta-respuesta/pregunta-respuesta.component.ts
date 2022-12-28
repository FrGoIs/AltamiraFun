import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../models/interfaces';
import { resolveResource, appDataDir } from '@tauri-apps/api/path'
// alternatively, use `window.__TAURI__.path.resolveResource`
import { readTextFile } from '@tauri-apps/api/fs'

// alternatively, use `window.__TAURI__.fs.readTextFile`
@Component({
    selector: 'app-pregunta-respuesta', templateUrl: './pregunta-respuesta.component.html', styleUrls: ['./pregunta-respuesta.component.css']
})
export class PreguntaRespuestaComponent implements OnInit {

    private preguntas: Pregunta[] = [];
    // @ts-ignore
    public selectedQuestion: Pregunta;

    constructor() {
    }

    ngOnInit(): void {
        this.getQuestionsFromFile('preguntas-chilp/preguntas.json')
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
    }

}
