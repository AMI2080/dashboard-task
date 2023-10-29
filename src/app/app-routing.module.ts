import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphComponent } from './content/dashboard/details/graph/graph.component';
import { ListComponent } from './content/dashboard/details/list/list.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { ControlRoomComponent } from './content/control-room/control-room.component';
import { ElementsComponent } from './content/elements/elements.component';
import { SettingsComponent } from './content/settings/settings.component';
import { NotificationsComponent } from './content/notifications/notifications.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'control-room', component: ControlRoomComponent },
  { path: 'elements', component: ElementsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'notifications', component: NotificationsComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'graph', pathMatch: 'full' },
      { path: 'graph', component: GraphComponent },
      { path: 'list', component: ListComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
