import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './home/home';
imports: [Home];


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  template: '<main> <header class = "brand main"> <img class = "brand logo" src = "/assets/logo.svg" alt = "iamge" aria-hidden = "true"> <section class = "brand sec"> <app-home/> </section> </header> </main>',
  // templatehomeUrl: './app.html',
  // styleUrl: './app.css'
})
export class App {
  title = 'homes';
}
