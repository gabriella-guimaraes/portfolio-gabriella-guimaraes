import { Component, HostListener, ElementRef } from '@angular/core';
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
  isVisible: boolean = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:scroll', [])
  onScroll() {
    const sectionElement = this.elementRef.nativeElement.querySelector('.content');
    const rect = sectionElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerHeight = windowHeight * 0.8;

    // Verificar se a parte superior do elemento está dentro da janela de visualização
    this.isVisible = rect.top < triggerHeight;
  }
}
