import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'krisu-app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isDark = true;

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'dark-theme' : 'light-theme';
  }

  // const obj = {key: 'value'};

  // obj?.['variable-name']
  // obj?.variable
  // obj['variable-name']
}
