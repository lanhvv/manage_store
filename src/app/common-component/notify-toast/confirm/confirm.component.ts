import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastPositionType } from 'primeng/toast';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  @Input() summary!: string;
  @Input() key!: string;
  @Input() position: ToastPositionType = "center";

  constructor(private messageService: MessageService) {}

  visible: boolean = false;

  showConfirm() {
      if (!this.visible) {
          this.messageService.add({ key: this.key, sticky: true, severity: 'warn', summary: this.summary });
          this.visible = true;
      }
  }

  onConfirm() {
      this.messageService.clear(this.key);
      this.visible = false;
  }

  onReject() {
      this.messageService.clear(this.key);
      this.visible = false;
  }
}
