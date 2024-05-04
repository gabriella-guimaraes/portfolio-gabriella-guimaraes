import { Component } from '@angular/core';
import { floatAnimation } from '../../utils/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [floatAnimation]
})
export class AboutComponent {

}
