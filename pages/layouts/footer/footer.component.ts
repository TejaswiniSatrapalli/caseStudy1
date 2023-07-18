import { Component } from '@angular/core';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  APP_NAME = APP_NAME;
  

}
