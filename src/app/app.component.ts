import { MatToolbar } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {NgModule} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,MatToolbar,SearchBarComponent,HomeComponent,DialogBoxComponent],
  template: `
    <app-home></app-home>
  <mat-toolbar>
      <app-search-bar/>
    </mat-toolbar>
    <!-- <app-dialog-box></app-dialog-box> -->
    <!-- <router-outlet></router-outlet> -->

  `,
  styles: [],
})
export class AppComponent {



}
