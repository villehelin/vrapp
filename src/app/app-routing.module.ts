import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TraininfoComponent} from './traininfo/traininfo.component';
import {TrainlocationComponent} from './trainlocation/trainlocation.component';
import {TrainsearchComponent} from './trainsearch/trainsearch.component';


const routes: Routes = [
  {
    path: 'aikataulu',
    component: TraininfoComponent
  },
  {
    path: 'junatkartalla',
    component: TrainlocationComponent
  },
  {
    path: 'junathaku',
    component: TrainsearchComponent
  },
{
  path: '',
    redirectTo: '/aikataulu',
  pathMatch: 'full'
},
{
  path: '**',
    component: TraininfoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
