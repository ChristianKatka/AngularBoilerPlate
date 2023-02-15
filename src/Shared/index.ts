import { DividerWithTextComponent } from './components/divider-with-text/divider-with-text.component';
import { AlertComponent } from './components/info-boxes/alert.component';
import { InfoComponent } from './components/info-boxes/info.component';
import { KrisuAppContainerComponent } from './components/krisu-app-container/krisu-app-container';
import { LoadingDotsComponent } from './components/loading-dots/loading-dots.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LogoComponent } from './components/logo/logo.component';
import { MediaSelectComponent } from './components/media-select/media-select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarContainerComponent } from './components/navbar/navbar.container';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SpaceGiverUsedWithFixedElementsComponent } from './components/space-giver-used-with-navbar/space-giver-used-with-fixed-elements.component';
import { SuccessComponent } from './components/success/success.component';
import { TruncateTextComponent } from './components/truncate-text/truncate-text.component';
import { AutofocusDirective } from './directives/auto-focus.directive';
import { FileSelectDirective } from './directives/file-select.directive';
import { BooleanPipe } from './pipes/boolean.pipe';
import { IconPipe } from './pipes/icon-type.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

export const components: any[] = [
  TruncateTextComponent,
  ProgressBarComponent,
  LogoComponent,
  AlertComponent,
  InfoComponent,
  LoadingSpinnerComponent,
  SuccessComponent,
  NavbarContainerComponent,
  NavbarComponent,
  KrisuAppContainerComponent,
  SpaceGiverUsedWithFixedElementsComponent,
  LoadingDotsComponent,
  AutofocusDirective,
  MediaSelectComponent,
  DividerWithTextComponent,
];
export const pipes = [BooleanPipe, IconPipe, TimeAgoPipe];
export const directives = [FileSelectDirective, AutofocusDirective];
