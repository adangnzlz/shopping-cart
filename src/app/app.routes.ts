

import { Routes } from '@angular/router';
import { OverviewComponent } from './featured-modules/home-module/pages/overview/overview.component';



// Routes
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    },
    {
        path: 'overview',
        component: OverviewComponent
    }


];
