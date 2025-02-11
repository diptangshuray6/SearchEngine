import { Component, inject, OnInit } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {OverlayModule} from '@angular/cdk/overlay';
import { SearchBarService } from '../../services/search-bar.service';
import { SearchOverlayComponent } from "../search-overlay/search-overlay.component";
import { NgClass } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-search-bar',
  imports: [MatIconButton, MatIcon, OverlayModule, SearchOverlayComponent,NgClass,MatButtonModule,MatDialogModule,CommonModule],
  template: `
   <div class="search-bar-container" cdkOverlayOrigin #overlayPosition="cdkOverlayOrigin"
   [ngClass]="{'opened mat-elevation-z2':overlayOpen()}">


   <button mat-icon-button>

      <mat-icon>search</mat-icon>
    </button>
       <input
       #searchInput
       [value]="searchTerm()"
       placeholder="Search my app"
       (click)="overlayOpen.set(true)"
       (click)="openDialogue()"
       (keydown.ENTER)="search(searchInput.value)"
    />

    @if (searchTerm()) {
      <button mat-icon-button (click)="clearSearch()">
        <mat-icon>close</mat-icon>
      </button>
    }
   </div>



   <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="overlayPosition" [cdkConnectedOverlayOpen]="overlayOpen()"
   (overlayOutsideClick)="overlayOpen.set(false)">
<app-search-overlay/>
   </ng-template>

   <!-- For fetching component -->
   <!-- <div class="search-bar-container" cdkOverlayOrigin #overlayPosition="cdkOverlayOrigin"
         [ngClass]="{'opened mat-elevation-z2': overlayOpen()}">
      <button mat-icon-button>
        <mat-icon>search</mat-icon>
      </button>
      <input #searchInput placeholder="Search department"
             (click)="fetchData()"
             (keydown.ENTER)="search(searchInput.value)" />

      <ul *ngIf="searchData.length > 0" class="dropdown">
        <li *ngFor="let item of searchData" (click)="openDialogue()">
          {{ item.DeptId }}
        </li>
      </ul>
    </div> -->
  `,
  styles: `

  :host{
    display:block;
  }

    .search-bar-container{
      padding:0px 56px 0px 8px;
      background:#eaf1fb;
      border-radius:32px;
      display:flex;
      align-items:center;

      >input{
        font-size:1.1rem;
        outline:none;
        border:none;
        background:inherit;
        min-width:32px;
      }

      &.opened{
        background:white;
        border-radius:32px 32px 0px 0px;
      }

      .close-button{
        position:absolute;
        top:0;
        right:8px;
        padding-left:50px;
      }
    }



  `
})
export class SearchBarComponent implements OnInit {

  //extra search data array
  searchData: any[] = [];

  //applying ngoninit
  ngOnInit(): void {}

   private SearchBarService=inject(SearchBarService);  //applying private
   overlayOpen = this.SearchBarService.overlayOpen;
   searchTerm = this.SearchBarService.searchTerm;  // for peforming search operation  that means if one of the options in dropdown is selected then it will open that search

   search(SearchTerm: string){
       if(!SearchTerm) return;

       this.SearchBarService.search(SearchTerm);
   }

   clearSearch(){
    this.SearchBarService.clearSearch();
   }

   readonly dialog = inject(MatDialog);

  openDialogue() {
    const dialogRef = this.dialog.open(DialogBoxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  //Extra For fetching the data
  // fetchData() {
  //   this.SearchBarService.getSearchData().subscribe(res => {
  //     this.searchData = res.data;
  //   });
  // }


}
