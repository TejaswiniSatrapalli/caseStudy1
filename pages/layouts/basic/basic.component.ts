import { Component } from '@angular/core';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  APP_NAME = APP_NAME;
}
