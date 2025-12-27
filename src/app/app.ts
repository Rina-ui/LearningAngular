import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './home/home';
imports: [Home];


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  template: '<section>\n' +
    '      <form>\n' +
    '        <input type="text" placeholder="Filter by city" />\n' +
    '        <button class="primary" type="button">Search</button>\n' +
    '      </form>\n' +
    '    </section>',
  // templatehomeUrl: './app.html',
  styleUrl: './home/home.css'
})
export class App {
  title = 'homes';
}
