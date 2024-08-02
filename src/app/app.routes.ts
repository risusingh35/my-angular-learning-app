import { Routes } from '@angular/router';
import { DirectivesComponent } from '../components/directives/directives.component';
import { CounterComponent } from '../components/counter/counter.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Counter Component',
        component: CounterComponent,
    },
    {
        path: '',
        title: 'Directive Component',
        component: DirectivesComponent,
    },
];
