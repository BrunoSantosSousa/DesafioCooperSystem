import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Repository } from '../../models/repository.model'

@Component({
  selector: 'app-repository-dialog',
  templateUrl: './repository-dialog.component.html',
  styleUrls: ['./repository-dialog.component.css']
})
export class RepositoryDialogComponent {

  constructor(
    public dialogRef : MatDialogRef<RepositoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Repository
  ) { }


}
