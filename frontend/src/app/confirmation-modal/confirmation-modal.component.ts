import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
  public message = "";
  public title = "";
  @Output() confirm = new EventEmitter<any>(true);

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: IConfirmationData) {
    this.message = data.message;
    this.title = data.title;
  }

  /**
   * emit event to parent component
   */
  public callCallback() {
    this.confirm.emit();
  }

}
