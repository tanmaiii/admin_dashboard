import React from "react";
import "./dashboard.scss";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../../components/dashboard-wrapper/DashboardWrapper";
import Box from "../../components/box/Box";
import { data } from "../../constants";

import { Bar } from "react-chartjs-2";

import SummaryBox, {
  SummaryBoxSpecial,
} from "../../components/summary-box/SummaryBox";

import { colors } from "../../constants";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import OverallList from "../../components/overall-list/OverallList";
import RevenueList from "../../components/revenue-list/RevenueList";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <div className="col pc-9 t-12 m-0">
        <DashboardWrapperMain>
          <div className="row">
            <div className="col pc-8 t-12 m-12">
              <div className="row">
                {data.summary.map((item, i) => (
                  <div key={i} className="col pc-6 t-6 m-12 mb">
                    <SummaryBox item={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col pc-4 t-12 m-12">
              <SummaryBoxSpecial item={data.revenueSummary} />
            </div>
          </div>
          <div className="row">
            <div className="col pc-12 t-12 m-12">
              <Box>
                <RevenueByMonthsChart />
              </Box>
            </div>
          </div>
        </DashboardWrapperMain>
      </div>
      <div className="col pc-3 t-0 m-0">
        <DashboardWrapperRight>
          <div className="title">Overall</div>
          <div className="mb">
            <OverallList />
          </div>
          <div className="title">Revenue by channel</div>
          <div className="mb">
            <RevenueList />
          </div>
        </DashboardWrapperRight>
      </div>
    </DashboardWrapper>
  );
}

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenueByMonths.data,
      },
    ],
  };

  return (
    <>
      <div className="title mb"></div>
      <div>
        <Bar options={chartOptions} data={chartData} height={"300px"} />
      </div>
    </>
  );
};
