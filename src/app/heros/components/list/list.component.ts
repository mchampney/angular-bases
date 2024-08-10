import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class HerosListComponent {
  heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  deletedHero?: string = '';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
