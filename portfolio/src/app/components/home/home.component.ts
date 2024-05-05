import { Component, HostListener, ElementRef } from '@angular/core';
import { introAnimationFloat } from '../../utils/animations';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [introAnimationFloat]
})
export class HomeComponent {
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

  // typing animation
  // textToShow: string = "Fullstack Web Developer"
}
