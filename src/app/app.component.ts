import { Component } from "@angular/core";
import { invoke } from "@tauri-apps/api/tauri";

@Component({
  selector: "app-root",
  template: `
    <h1>100 Mexicanos Dijeron (version Altamira)</h1>
    
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
})
export class AppComponent {

}
