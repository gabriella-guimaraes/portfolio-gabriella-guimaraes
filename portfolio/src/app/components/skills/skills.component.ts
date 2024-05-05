import { Component, HostListener, ElementRef } from '@angular/core';
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
  isVisible: boolean = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.elementRef.nativeElement.querySelector('.content');
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerHeight = windowHeight * 0.8; // Defina a porcentagem da altura da janela aqui

    // Verificar se a parte superior do elemento está dentro da janela de visualização
    this.isVisible = rect.top < triggerHeight;
  }
}
