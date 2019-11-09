import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThemeProviderComponent } from '../theme-provider/theme-provider.component';
import { MyButtonComponent } from '../my-button/my-button.component';
import { Child1Component } from './child1/child1.component';
import { Child1dot1Component } from './child1dot1/child1dot1.component';
import { ProviderService } from './provider.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ThemeProviderComponent, MyButtonComponent, Child1Component, Child1dot1Component ],
  bootstrap:    [ AppComponent ],
  providers: [ProviderService]
})
export class AppModule { }
