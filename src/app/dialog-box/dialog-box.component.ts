import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  imports: [MatButtonModule,MatDialogModule,CommonModule],
  template: `
  <mat-dialog-content class="mat-topography">
    <!-- <div value="" *ngFor = "let dept of findValues"> -->
    <div>
        <!-- <h3>{{ data.DeptId }}</h3>
        <p>{{ data.Introduction }}</p> -->
      </div>



  </mat-dialog-content>


  <mat-dialog-actions align="end">
  <button mat-button mat-dialog-close>Cancel</button>
</mat-dialog-actions>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogBoxComponent {//implements OnInit {

  findValues: any[] = [];
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
  this.gettingInfo();
  }

  gettingInfo(){
    this.http.get('assets/railwayInfo.json').subscribe((res:any)=>{
      this.findValues = res.data;
    })
  }

  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
