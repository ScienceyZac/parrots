import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParrotsComponent } from './parrots/parrots.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [AppComponent, ParrotsComponent, EditComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
