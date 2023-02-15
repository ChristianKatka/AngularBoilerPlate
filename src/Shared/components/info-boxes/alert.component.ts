import { Component, Input } from '@angular/core';

@Component({
  selector: 'krisu-app-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss'],
})
export class AlertComponent {
  @Input()
  text = '';
}
