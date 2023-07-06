import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppComponent, HeaderComponent],
  exports: [AppComponent, HeaderComponent],
})
export class AppModuleModule {}
