import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatIconModule,MatToolbarModule,MatButtonModule,RouterLink,RouterOutlet],
 templateUrl:'./home.component.html',
  styles: ``
})
export class HomeComponent {

}
