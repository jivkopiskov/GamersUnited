import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCommentComponent>) { }
  
  key = environment.tinyMCEkey;
  
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
