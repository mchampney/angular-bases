import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { HerosListComponent } from './components/list/list.component';

@NgModule({
  declarations: [HeroComponent, HerosListComponent],
  exports: [HeroComponent, HerosListComponent],
  imports: [CommonModule],
})
export class HeroModule {}
