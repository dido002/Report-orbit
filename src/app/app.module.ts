import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitCountComponent } from './Orbit-count/orbit-count.component';
import { OrbitListComponent } from './Orbit-List/orbit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitCountComponent,
    OrbitListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
