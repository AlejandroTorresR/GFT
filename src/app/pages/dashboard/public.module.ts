import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRouting } from './public.routing';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountsComponent } from '../accounts/accounts.component';
import { ChartsModule } from 'ng2-charts';
import { doughnutChartComponent } from '../../components/doughnutChart/doughnutChart.component';
import { barChartComponent } from '../../components/barChart/barChart.component';

@NgModule({
    imports: [
        CommonModule,
        PublicRouting,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule
    ],
    declarations: [
    	AccountsComponent,
    	doughnutChartComponent,
    	barChartComponent
    ],
    providers: []
})
export class PublicModule { }