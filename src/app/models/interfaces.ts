export interface Pregunta{
    enunciacion: string;
    respuestas: Respuesta[];


}
export interface Respuesta {
    texto: string;
    valor: number;
}
