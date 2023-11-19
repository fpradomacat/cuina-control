import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatInputModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  // Define your data structure for distributors and days
  daysOfMonth: number[] = this.getDaysOfMonth();
  headersRowDefinition: string[] = ['distributor', ...this.daysOfMonth.map(day => 'day' + day)];

  // You can initialize your data model here
  ngOnInit(): void {
    console.log('daysOfMonth:', this.daysOfMonth);
    console.log('headersRowDefinition:', this.headersRowDefinition);
  }

  // For example:
  tableData: any[] = [
    { distributor: 'Aguas Danone', day1: '345.43', day2: '87', /* ... */ },
    { distributor: 'Coca cola', day1: '310', day5: '450', /* ... */ },
    { distributor: 'Jamones ibericos', day3: '270', day6: '84.9', /* ... */ },
    { distributor: 'Fruiteria Sant Joan', day1: '93', day7: '14.5', /* ... */ },
    { distributor: 'Forn de pa', day2: '364.8', day8: '269', /* ... */ },
    // ...
  ];

  private getDaysOfMonth(): number[] {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();

    // Generate an array of numbers from 1 to the number of days in the current month
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return daysArray;
  }

  setTwoNumberDecimal(element: any, day: string) {
    const hasDecimalPart = element[day] % 1 !== 0;
    if (hasDecimalPart) {
      element[day] = parseFloat(element[day]).toFixed(2);
    }
  }
}