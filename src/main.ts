import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModuleModule } from './app-module/app-module.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppModuleModule],
  template: `
      <app-header></app-header>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
