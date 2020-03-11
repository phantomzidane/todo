import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { DoneComponent } from './done/done.component';
import { AlltodosComponent } from './alltodos/alltodos.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddComponent,
    DoneComponent,
    AlltodosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
