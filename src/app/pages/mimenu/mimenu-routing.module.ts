import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MimenuComponent } from './mimenu.component';
import { LauraComponent } from './laura/laura.component';
import { FabiolaComponent } from './fabiola/fabiola.component';


const routes: Routes = [{
  path: '',
  component: MimenuComponent,
  children: [
    {
      path: 'laura',
      component: LauraComponent,
    },
    {
      path: 'fabiola',
      component: FabiolaComponent,
    },

  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MimenuRoutingModule {

}

export const routedComponents = [
  MimenuComponent,
  LauraComponent,
  FabiolaComponent
];
