import { Component } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { DropdownComponent } from '../../utils/dropdown/dropdown.component';
import { floatAnimation, rightFloatAnimation, leftFloatAnimation } from '../../utils/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ProgressBarComponent, DropdownComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  animations: [floatAnimation, rightFloatAnimation, leftFloatAnimation]
})
export class SkillsComponent {

}
