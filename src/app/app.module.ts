import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SumaryComponent } from './content/dashboard/sumary/sumary.component';
import { DetailsComponent } from './content/dashboard/details/details.component';
import { ListComponent } from './content/dashboard/details/list/list.component';
import { GraphComponent } from './content/dashboard/details/graph/graph.component';
import { RadarChartComponent } from './content/dashboard/sumary/radar-chart/radar-chart.component';
import { DropdownMenuComponent } from './content/dashboard/details/list/dropdown-menu/dropdown-menu.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { ControlRoomComponent } from './content/control-room/control-room.component';
import { ElementsComponent } from './content/elements/elements.component';
import { SettingsComponent } from './content/settings/settings.component';
import { NotificationsComponent } from './content/notifications/notifications.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SumaryComponent,
    DetailsComponent,
    ListComponent,
    GraphComponent,
    RadarChartComponent,
    DropdownMenuComponent,
    NotFoundComponent,
    ControlRoomComponent,
    ElementsComponent,
    SettingsComponent,
    NotificationsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgScrollbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
