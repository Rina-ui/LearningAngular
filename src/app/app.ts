import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {Home} from './home/home';
imports: [Home];


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home],
  template: '<main>\n' +
    '      <a [routerLink]="[\'/\']">\n' +
    '        <header class="brand-name">\n' +
    '          <img class="brand-logo" src="/public/logo.svg" alt="logo" aria-hidden="true" />\n' +
    '        </header>\n' +
    '      </a>\n' +
    '      <section class="content">\n' +
    '        <router-outlet />\n' +
    '      </section>\n' +
    '    </main>',
  // templatehomeUrl: './app.html',
  styleUrl: './home/home.css'
})
export class App {
  title = 'homes';
}
