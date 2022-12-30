export interface Pregunta{
    enunciacion: string;
    respuestas: Respuesta[];


}
export interface Respuesta {
    texto: string;
    valor: number;
}
export interface Moderador{
    team0Points: number;
    team1Points: number;
    xCount: number;
    runningCount: number;

}
