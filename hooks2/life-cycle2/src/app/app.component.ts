import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title2Component } from './title2/title2.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title2Component, CheckSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'life-cycle2';
  isAliveCheckSample: boolean = true;
}
