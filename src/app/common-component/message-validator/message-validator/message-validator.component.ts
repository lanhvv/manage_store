import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-validator',
  templateUrl: './message-validator.component.html',
  styleUrls: ['./message-validator.component.css']
})
export class MessageValidatorComponent {
  @Input() public name!: string;
  @Input() public input!: any;
}
