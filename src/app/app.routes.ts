import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CommunityComponent } from './components/community/community.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutUsComponent,
        pathMatch: 'full'
    },
    {
        path: 'community',
        component: CommunityComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
