import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { ChartConfiguration, Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngAfterViewInit() {
    setTimeout(() => {
      this.chart?.chart?.resize();
    });
  }

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        data: [10, 55, 35, 50, 65, 120],
        label: 'Chiffre d\'affaires annuel',
      },
    ],
  };
}
