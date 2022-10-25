import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import { Chart } from "react-google-charts";

const Dashboard = () => {
  const [chartsData, setCharts] = useState([]);
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then((results) => {
        setCharts(results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const value1 = [2013, "Åland Islands"];
  const value2 = [2012, "Albania"];
  const value3 = [2011, "American Samoa"];
  const value4 = [2010, "Andorra"];
  const value5 = [2009, "Argentina"];

  const data = {
    labels: [value1, value2, value3, value4, value5],
    datasets: [
      {
        data: [128427, 139381, 214842, 114512, 183931],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div
      style={{
        marginTop: "100px",
        positon: "absolute",
        top: "50",
        bottom: "50",
      }}
    >
      <Bar data={data} width={100} height={25} />
      <Chart
        chartType="AreaChart"
        data={[          ["Åland Islands", "Albania", "American Samoa", "Andorra", "Argentina"],
          [128427, 139381, 214842, 114512, 183931]
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
};

export default Dashboard;
