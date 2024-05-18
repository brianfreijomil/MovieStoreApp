import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-pay',
  standalone: true,
  imports: [],
  templateUrl: './modal-pay.component.html',
  styleUrl: './modal-pay.component.css'
})
export class ModalPayComponent {

  @Output() modalStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  title = 'Sorry, try again later';

  constructor() {

  }

  hideModal() {
    this.modalStatus.emit(false);
  }

}
