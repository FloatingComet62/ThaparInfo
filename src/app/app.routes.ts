import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { TimetableEditComponent } from './pages/timetable-edit/timetable-edit.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'map', component: MapComponent },
    { path: 'timetable', component: TimetableComponent },
    { path: 'timetable/edit', component: TimetableEditComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' } // Redirect to home for any unknown routes
];
