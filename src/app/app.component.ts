import { Component } from "@angular/core";
import { invoke } from "@tauri-apps/api/tauri";
import { GameHostModule } from './game-host/game-host.module';

@Component({
  selector: "app-root",
  template: `
    <app-game-host></app-game-host>

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
    GameHostModule
  ]
})
export class AppComponent {

}
