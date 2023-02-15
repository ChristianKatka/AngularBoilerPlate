import { Component, Input } from '@angular/core';

@Component({
  selector: 'krisu-app-space-giver-used-with-fixed-elements',
  templateUrl: 'space-giver-used-with-fixed-elements.component.html',
})
export class SpaceGiverUsedWithFixedElementsComponent {
  @Input()
  height = 80;
}
