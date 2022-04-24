import React, { Component } from "react";
import Chart from "react-apexcharts";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const BarChartOvv = () => {
  const data = [
    {
      name: "Tháng 1",
      so_luong: 300,
      pv: 2400,
    },
    {
      name: "Tháng 2",
      so_luong: 200,
      pv: 2400,
    },
    {
      name: "Tháng 3",
      so_luong: 100,
      pv: 2400,
    },
    {
      name: "Tháng 4",
      so_luong: 100,
      pv: 2400,
    },
    {
      name: "Tháng 5",
      so_luong: 202,
      pv: 2400,
    },
    {
      name: "Tháng 6",
      so_luong: 503,
      pv: 2400,
    },
    {
      name: "Tháng 7",
      so_luong: 599,
      pv: 2400,
    },
    {
      name: "Tháng 8",
      so_luong: 220,
      pv: 2400,
    },
    {
      name: "Tháng 9",
      so_luong: 138,
      pv: 2400,
    },
    {
      name: "Tháng 10",
      so_luong: 319,
      pv: 2400,
    },
    {
      name: "Tháng 11",
      so_luong: 220,
      pv: 2400,
    },
    {
      name: "Tháng 12",
      so_luong: 335,
      pv: 2400,
    }
  ];

  return (
    <BarChart width={1000} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="pv" fill="#82ca9d" /> */}
      <Bar dataKey="so_luong" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartOvv;
