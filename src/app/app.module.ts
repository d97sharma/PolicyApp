import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './home-page/home-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchPolicyComponent } from './search-policy/search-policy.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';
import { DeletePolicyComponent } from './delete-policy/delete-policy.component';
import { AddPolicyComponent } from './add-policy/add-policy.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
 import {MatRadioModule} from '@angular/material/radio';
import { DataVisualizerComponent } from './data-visualizer/data-visualizer.component'; 
import { NgxChartsModule }from '@swimlane/ngx-charts';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPolicyComponent,
    UpdatePolicyComponent,
    DeletePolicyComponent,
    AddPolicyComponent,
    DataVisualizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    NgxChartsModule,
    MatProgressSpinnerModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
