import { Routes } from '@angular/router';

import { ValentineComponent } from './valentine/valentine.component';
import { SurpriseComponent } from './surprise/surprise.component';

export const routes: Routes = [
  { path: '', component: ValentineComponent },
  { path: 'surprise', component: SurpriseComponent }
];
