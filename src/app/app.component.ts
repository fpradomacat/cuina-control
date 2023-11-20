import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "./table/table.component";
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { StoreSelectorComponent } from './store-selector/store-selector.component';
import { StatsSummaryComponent } from './stats-summary/stats-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule, 
    RouterOutlet, 
    TableComponent, 
    StoreSelectorComponent,
    StatsSummaryComponent, 
    MonthSelectorComponent, 
    TabsComponent, 
    LateralMenuComponent
  ]
})
export class AppComponent {
  title = 'cuina-control';
}
