import { Component } from "@angular/core";
import { invoke } from "@tauri-apps/api/tauri";
import { PreguntaRespuestaModule } from './pregunta-respuesta/pregunta-respuesta.module';

@Component({
  selector: "app-root",
  template: `
    <h1>100 Mexicanos Dijeron (version Altamira)</h1>
    <app-pregunta-respuesta></app-pregunta-respuesta>

  `,
  styles: [
    `
      body {
        background-color: red;
      }

      h1 {
        color: white;
      }
    `,
  ],
  standalone: true,
  imports: [
    PreguntaRespuestaModule
  ]
})
export class AppComponent {

}
