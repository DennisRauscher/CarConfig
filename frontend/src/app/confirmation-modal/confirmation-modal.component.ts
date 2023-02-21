import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
  public message = "";
  @Output() onConfirm = new EventEmitter<any>(true);

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: IConfirmationData) {
    this.message = data.message;
  }

  public callCallback() {
    this.onConfirm.emit();
  }

}
