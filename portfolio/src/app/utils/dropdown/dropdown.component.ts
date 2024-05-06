import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() title: string;
  @Input() text: string;
  isOpen: boolean = false;

  constructor() { 
    this.title = '';
    this.text = '';
  }

  toggleDropdown() {
    console.log("Botão foi clicado")
    this.isOpen = !this.isOpen;
  }
}
