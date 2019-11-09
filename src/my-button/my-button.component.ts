import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Inject,
  forwardRef
} from "@angular/core";
import {ThemeProviderComponent} from "../theme-provider/theme-provider.component"

@Component({
  selector: "my-button",
  template: `
    <button type="button" [style.color]="themeProvider?.theme?.palette[color]" [style.font-size]="themeProvider?.theme?.scales['spacing-0'+scale]">
      <ng-content></ng-content>
    </button>
  `
})
export class MyButtonComponent implements OnInit {
  @HostBinding("class") className;
  @Input() color: string;
  @Input() scale: number;
  
  constructor(
    @Inject(forwardRef(() => ThemeProviderComponent))
    private themeProvider: ThemeProviderComponent
  ) {
  }

  ngOnInit() {
    console.log(this.themeProvider)
  }

}
