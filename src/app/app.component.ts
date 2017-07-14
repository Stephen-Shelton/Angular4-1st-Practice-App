import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recipes = true;
  shoppingList = false;
  
  showRecipesOrShoppingList(choice: string) {
    if (choice === 'recipes') {
      this.recipes = true;
      this.shoppingList = false;
    } else {
      this.recipes = false;
      this.shoppingList = true;
    }
  }
}
