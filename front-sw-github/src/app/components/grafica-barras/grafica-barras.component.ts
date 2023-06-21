import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styleUrls: ['./grafica-barras.component.css']
})
export class GraficaBarrasComponent  implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() users: Usuario[];

  constructor(){
    
  }

  ngOnInit(): void {
    this.actualizarData();
  }

  ngOnChanges(): void{
    this.actualizarData();
  }

  public actualizarData(){
    this.barChartData.datasets[0].data = []
    this.barChartData.labels=[]; 
    this.users.forEach((usuario) => {
      this.barChartData.labels?.push(usuario.login);
      this.barChartData.datasets[0].data.push(usuario.score);
    });
    this.chart?.update();
  }


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0.5
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: "Usuarios GitHUB" }
    ]
  };


}
