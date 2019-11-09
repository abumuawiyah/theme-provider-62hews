import { Injectable } from '@angular/core';
import {
  Inject,
  forwardRef
} from "@angular/core";
import {ThemeProviderComponent} from "../theme-provider/theme-provider.component"

@Injectable()
export class ProviderService {

  constructor(
    @Inject(forwardRef(() => ThemeProviderComponent))
    private themeProvider: ThemeProviderComponent
  ) {
  }

}