import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Inject,
  forwardRef
} from "@angular/core";
// import {ThemeProviderComponent} from "../../theme-provider/theme-provider.component"
import { ProviderService } from '../provider.service'

@Component({
  selector: 'app-child1dot1',
  templateUrl: './child1dot1.component.html',
  styleUrls: ['./child1dot1.component.css']
})
export class Child1dot1Component implements OnInit {

  constructor(
    // @Inject(forwardRef(() => ThemeProviderComponent))
    // private themeProvider: ThemeProviderComponent
    private provider: ProviderService
  ) {
  }

  ngOnInit() {
    console.log('test', this.provider)
  }

}