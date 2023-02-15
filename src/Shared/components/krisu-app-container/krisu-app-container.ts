import { Component, Input } from '@angular/core';

@Component({
  selector: 'krisu-app-container',
  templateUrl: 'krisu-app-container.html',
})
export class KrisuAppContainerComponent {
  @Input()
  width = '100%';
}
