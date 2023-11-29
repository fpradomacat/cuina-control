import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { StatsSummaryComponent } from './stats-summary/stats-summary.component';
import { StoreSelectorComponent } from './store-selector/store-selector.component';
import { TableComponent } from "./table/table.component";
import { TabsComponent } from './tabs/tabs.component';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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
    LateralMenuComponent,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
  ]
})
export class AppComponent {
  title = 'Cuina Control';

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
