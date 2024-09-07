import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  ngOnInit(): void {
    // Initialize the chart
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    const option = {
      xAxis: {
        
        type: 'category',
        boundaryGap: false,
        axisLine: {
          show: false
        },
        data: ['ديسمبر','نوفمبر','اكتوبر','سبتمبر','اغسطس','يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: false // Hide the y-axis numbers
        }
      },
      series: [
        {
          data: [300, 350, 300, 350, 400, 300, 350, 300, 350, 300, 350 ,250],
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            color: 'rgb(138, 116, 249)'
          },
         
          areaStyle: {
            color: {
              type: 'linear', 
              x: 0, 
              y: 1, 
              x2: 0, 
              y2: 0, 
              colorStops: [
                { offset: 0.2, color: 'rgba(138, 116, 249, 0)' },
                { offset: 1, color: 'rgba(138, 116, 249, 1)' } 
              ],
              global: false 
            }
          },
          symbol: 'none' ,
          markLine: {
            symbol: ['none', 'circle'],
            symbolSize: [20, 20],
            
            data: [
              {
                xAxis: 'اغسطس',
    
                label: {
                  show: false, 
                  formatter: 'أغسطس', 
                  position: 'middle',
                },
                
                lineStyle: {
                  color: 'rgb(138, 116, 249)',
                  width: 2, 
                  type: 'solid' 
                }
              }
            ]
          }
        }
      ],
      //
    };
    
    option && myChart.setOption(option);
}

}
