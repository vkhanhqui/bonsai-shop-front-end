import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Chậu', 'Sen Đá, Xương Rồng', 'Cây Nội Thất', 'Cây Ngoại Thất', 'Cây Thủy Sinh'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>


      );
    }
  }

const domContainer = document.querySelector('#app');
export default ApexChart