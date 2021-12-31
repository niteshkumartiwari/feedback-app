import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./css/BuildDasboard.css";

function BuildDasboard(props) {
  const data = props.poll.data;
  return (
    <div className="container">
      <div className="header">
        <h1>{props.poll.questionText}</h1>
        <h3>{props.poll.questionDescription}</h3>
      </div>
      <div className="bar_graph">
        <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Choice" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default BuildDasboard;
