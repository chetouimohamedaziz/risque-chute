import { Component, signal } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { APP_WORDING } from './constants/app-wording.constant';

@Component({
  selector: 'app-root',
  imports: [MatToolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly appWording = APP_WORDING;
}
