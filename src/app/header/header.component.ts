import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() listener = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onSelect(choice: string) {
    (choice === 'recipes') ? this.listener.emit('recipes') : this.listener.emit('shoppingList');
  }
}