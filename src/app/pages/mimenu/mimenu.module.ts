import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { MimenuRoutingModule, routedComponents } from './mimenu-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    MimenuRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MimenuModule { }
