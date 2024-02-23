import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxPageScrollCoreModule, PageScrollService } from 'ngx-page-scroll-core';
// import { Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {

  // }

  // ngOnInit(): void {
  //   this.pageScrollService.scroll({
  //     document: this.document,
  //     scrollTarget: 'content-anchor'
  //   });
  // }

  btnMenu: boolean = false;

  btnMobile(){
    this.btnMenu = !this.btnMenu;
  }

}
