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

    public preguntas: Pregunta[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.getQuestionsFromFile('preguntas-chilp/preguntas.json')
    }

    async getQuestionsFromFile(path:string){
        const dataDir = await appDataDir();
        console.log(dataDir, 'dataDir')
        const resourcePath = await resolveResource(path)
        const file = await readTextFile(resourcePath);
        this.preguntas = JSON.parse(file)
        return true;
    }

}
