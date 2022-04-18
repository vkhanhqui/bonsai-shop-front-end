import React, { Component } from 'react';

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'January', don_hang: 4000, Doanh_thu: 2400,  Don_hang_huy:20},
        {name: 'Febuary', don_hang: 3000, Doanh_thu: 1398,  Don_hang_huy:21},
        {name: 'March', don_hang: 2000, Doanh_thu: 9800,  Don_hang_huy:22},
        {name: 'April', don_hang: 2780, Doanh_thu: 3908,  Don_hang_huy:20},
        {name: 'May', don_hang: 1890, Doanh_thu: 4800, Don_hang_huy:23},
        {name: 'June', don_hang: 2390, Doanh_thu: 3800, Don_hang_huy:24},
        {name: 'July', don_hang: 3490, Doanh_thu: 4300, Don_hang_huy:20},
        {name: 'August', don_hang: 3490, Doanh_thu: 4300,  Don_hang_huy:21},
        {name: 'September', don_hang: 3490, Doanh_thu: 4300, Don_hang_huy:23},
        {name: 'October', don_hang: 3490, Doanh_thu: 4300, Don_hang_huy:20},
        {name: 'November', don_hang: 3490, Doanh_thu: 4300, Don_hang_huy:20},
        {name: 'December', don_hang: 3490, Doanh_thu: 4300, Don_hang_huy:20},
        
      ]
    }
  }

  render() {
    const { data } = this.state;

    return (
      <ResponsiveContainer className="chart" height={300}>
        <LineChart 
         width={600} 
         height={300} 
         data={data}
         margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="Doanh_thu" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="don_hang" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Don_hang_huy" stroke="#ff0000" />
  
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartExample;
