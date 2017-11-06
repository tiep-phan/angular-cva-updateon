import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RformComponent } from './rform/rform.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    RformComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
