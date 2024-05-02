import { Component } from '@angular/core';
import { floatAnimation } from '../../utils/animations';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [floatAnimation]
})
export class HomeComponent {

}
