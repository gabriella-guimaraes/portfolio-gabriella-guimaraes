import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule, 
    HeaderComponent, 
    HomeComponent, 
    AboutComponent, 
    SkillsComponent, 
    TimelineComponent, 
    EducationComponent, 
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  btnMenu: boolean = false;

  btnMobile() {
    this.btnMenu = !this.btnMenu;
  }

  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit(){
    this.router.navigate(["/"]);
  }

  goToHome() {
    this.scroller.scrollToAnchor("Home");
  }

  goToAbout() {
    this.scroller.scrollToAnchor("About");    
  }

  goToSkills() {
    this.scroller.scrollToAnchor("Skills");
  }

  goToTimeline() {
    this.scroller.scrollToAnchor("Timeline");
  }

  goToEducation() {
    this.scroller.scrollToAnchor("Education");
  }

  goToProjects() {
    this.scroller.scrollToAnchor("Projects");
  }

}
