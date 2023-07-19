
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { LinearScale, Title, CategoryScale, BarController, BarElement, Tooltip } from 'chart.js';

Chart.register(LinearScale, Title, CategoryScale, BarController, BarElement, Tooltip);

interface ExchangeRate {
  country: string;
  code: string;
  rate: number;
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('exchangeRateGraph') exchangeRateGraph!: ElementRef<HTMLCanvasElement>;

  exchangeRates: ExchangeRate[] = [
    { country: 'India', code: 'INR', rate: 80.0 },
    { country: 'USA', code: 'USD', rate: 1.0 },
    { country: 'UK', code: 'GBP', rate: 0.75 },
    { country: 'France', code: 'EUR', rate: 0.85 },
    { country: 'Japan', code: 'JPY', rate: 110.0 }
  ];

  country1: string = '';
  country2: string = '';
  chartData: number[] = [];
  chartLabels: string[] = [];
  chart: Chart<'bar'> | null = null;

  ngOnInit() {
    this.updateChart();
  }

  ngAfterViewInit() {
    this.createChart();
  }

  getExchangeRate(countryCode: string): number | undefined {
    const exchangeRate = this.exchangeRates.find(rate => rate.code === countryCode);
    return exchangeRate ? exchangeRate.rate : undefined;
  }


  

  updateChartAndRates() {
    this.updateChart();
  }
  getCountryName(countryCode: string): string {
    const country = this.exchangeRates.find(rate => rate.code === countryCode);
    return country ? country.country : '';
  }
  getExchangeRateString(country1: string, country2: string): string {
    const rate1 = this.getExchangeRate(country1);
    const rate2 = this.getExchangeRate(country2);
  
    if (rate1 && rate2) {
      return `${rate1} ${country1} = ${rate2} ${country2}`;
    } else {
      return '';
    }
  }




  
  updateChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const defaultChartData: number[] = this.exchangeRates.map(rate => rate.rate);
    const defaultChartLabels: string[] = this.exchangeRates.map(rate => rate.country);

    if (this.country1 && this.country2) {
      this.chartData = [
        this.getExchangeRate(this.country1) || 0,
        this.getExchangeRate(this.country2) || 0
      ];
      this.chartLabels = [this.country1, this.country2];
    } else if (this.country1 && !this.country2) {
      const country1Rate = this.getExchangeRate(this.country1) || 0;
      this.chartData = [
        country1Rate,
        ...defaultChartData.filter(rate => rate !== country1Rate)
      ];
      this.chartLabels = [this.country1, ...defaultChartLabels.filter(country => country !== this.country1)];
    } else {
      this.chartData = defaultChartData;
      this.chartLabels = defaultChartLabels;
    }

    this.createChart(); // Call createChart() after updating chartData and chartLabels
  }

  createChart() {
    const canvas = this.exchangeRateGraph.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.chartLabels,
          datasets: [
            {
              data: this.chartData,
              backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(153, 102, 255, 0.5)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          animation: false, // Disable chart animation
          responsive: false, // Prevent canvas resizing
          maintainAspectRatio: false // Prevent canvas resizing
        }
        
      });
    } else {
      console.log("Canvas context not found.");
    }
  }
}