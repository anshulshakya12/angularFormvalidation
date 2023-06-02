import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginformComponent } from '../loginform/loginform.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(LoginformComponent);

   
  }
}
