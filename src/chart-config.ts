import { ChartConfiguration } from "chart.js"

export const buildChartConfig = (data: [number, number][], chartTitle: string) =>
  ({
    type: "line",
    data: {
      labels: data.map(([dateString]) => {
        let date = new Date(dateString)
        const day = date.toLocaleString("default", { day: "2-digit" })
        const month = date.toLocaleString("default", { month: "2-digit" })
        const year = date.toLocaleString("default", { year: "numeric" })
        return day + "-" + month + "-" + year
      }),
      datasets: [
        {
          label: `${chartTitle} Price ($)`,
          data: data.map(([, dataValue]) => dataValue),
          borderWidth: 1,
          pointStyle: "circle",
          pointBorderWidth: 0.1,
          borderColor: "yellow",
        },
      ],
    },
    options: {
      responsive: true,
      transitions: {
        show: {
          animations: {
            x: {
              from: 0,
            },
            y: {
              from: 0,
            },
          },
        },
        hide: {
          animations: {
            x: {
              to: 0,
            },
            y: {
              to: 0,
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  } as ChartConfiguration)