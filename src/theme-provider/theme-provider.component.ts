import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  ContentChild,
  TemplateRef
} from "@angular/core";
import palette from "./colors"
import scales from "./spacing";

@Component({
  selector: "theme-provider",
  template: `
    <ng-container *ngIf="childAsTemplate">
      <ng-container *ngTemplateOutlet="template; context: theme"></ng-container>
    </ng-container>
    <ng-content *ngIf="!childAsTemplate"></ng-content>
  `
})
export class ThemeProviderComponent implements AfterContentInit {
  @ContentChild(TemplateRef, { static: false }) template!: TemplateRef<any>;
  theme: any = {
    palette,
    scales
  };
  childAsTemplate: boolean = false;

  constructor() {}

  ngAfterContentInit() {
    this.childAsTemplate = this.template && true;
  }
}
