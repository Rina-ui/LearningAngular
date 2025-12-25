import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<h1>Hello World!</h1>',
  // templateUrl: './app.html',
  // styleUrl: './app.css'
})
export class App {
  title = 'homes';
}
