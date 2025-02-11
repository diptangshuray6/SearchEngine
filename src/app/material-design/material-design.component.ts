import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-material-design',
  imports: [MatButtonModule,MatDialogModule],
  template: `
    <p>
      material-design works!
    </p>
  `,
  styles: ``
})
export class MaterialDesignComponent {

}
