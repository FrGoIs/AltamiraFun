import { Component, OnInit } from '@angular/core';
import { Moderador, Pregunta } from '../models/interfaces';
import { resolveResource } from '@tauri-apps/api/path'
// alternatively, use `window.__TAURI__.path.resolveResource`
import { readTextFile } from '@tauri-apps/api/fs'

const QUESTIONS_PATH = 'preguntas-chilp/preguntas.json';
@Component({
    selector: 'app-game-host', templateUrl: './game-host.component.html', styleUrls: ['./game-host.component.css']
})
export class GameHostComponent implements OnInit {
    public moderador: Moderador = {
        team0Points: 0,
        team1Points: 0,
        runningCount: 0,
        xCount: 0
    }
    private preguntas: Pregunta[] = [];
    // @ts-ignore
    public selectedQuestion: Pregunta;


    public currentPoints = 0;

    constructor() {
    }

    ngOnInit(): void {
        this.getQuestionsFromFile(QUESTIONS_PATH)

    }

    async getQuestionsFromFile(path:string){
        const resourcePath = await resolveResource(path)
        const file = await readTextFile(resourcePath);
        this.preguntas = JSON.parse(file)
        this.getNextQuestion();
        return true;
    }
    public getNextQuestion(){
        const removeIndex = Math.floor(Math.random() * this.preguntas.length)
        console.log("here", removeIndex, this.preguntas.length)
        // @ts-ignore
        this.selectedQuestion = this.preguntas.splice(removeIndex,1).pop();
        this.moderador.runningCount = 0;
        this.moderador.xCount = 0;

    }

    public resetGame(){
        // @ts-ignore
        this.selectedQuestion = undefined;
        this.moderador.team0Points = 0
        this.moderador.team1Points = 0;
        this.moderador.xCount = 0;
        this.moderador.runningCount = 0
        this.getQuestionsFromFile(QUESTIONS_PATH)
    }
    public incrementStrikeCount(){
        this.moderador.xCount++;
    }
    public addPoints(teamNumber: number){
        switch (teamNumber){
            case 0:
                this.moderador.team0Points += this.moderador.runningCount;
                break;
            case 1:
                this.moderador.team1Points += this.moderador.runningCount;
                break;
        }
        this.moderador.runningCount = 0;
        this.moderador.xCount = 0;
    }

    revealAnswer(answerNo: number) {
        this.selectedQuestion.respuestas[answerNo].show = true;
        this.moderador.runningCount += this.selectedQuestion.respuestas[answerNo].valor;

    }
}
