import { Component } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { DropdownComponent } from '../../utils/dropdown/dropdown.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ProgressBarComponent, DropdownComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
