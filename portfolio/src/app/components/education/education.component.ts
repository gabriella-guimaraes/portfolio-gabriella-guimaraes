import { Component,HostListener, ElementRef } from '@angular/core';
import { rightFloatAnimation, leftFloatAnimation } from '../../utils/animations';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [rightFloatAnimation, leftFloatAnimation]
})
export class EducationComponent {
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