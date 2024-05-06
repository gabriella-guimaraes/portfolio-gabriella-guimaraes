import { Component,HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';
import { rightFloatAnimation, leftFloatAnimation, floatAnimation } from '../../utils/animations';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [rightFloatAnimation, leftFloatAnimation, floatAnimation]
})
export class EducationComponent implements OnInit {
  isVisible: boolean = false;
  isMobile: boolean = false;

  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth
  }

  checkScreenWidth() {
    const sectionElement = this.elementRef.nativeElement.querySelector('#animationTrigger');
    if (window.innerWidth <= 768) {
      this.render.addClass(sectionElement, 'mobile');
      this.isMobile = true; // Define true para telas mobile
    } else {
      this.render.removeClass(sectionElement, 'mobile');
      this.isMobile = false; // Define false para telas desktop
    }
  }


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