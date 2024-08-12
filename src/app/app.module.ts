import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HeroModule } from './heros/hero.module';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, AppRoutingModule, HeroModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
