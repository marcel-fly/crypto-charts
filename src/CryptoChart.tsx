import { Chart, registerables } from "chart.js"
import { useEffect, useRef } from "react"
import styled from "styled-components"
import { buildChartConfig } from "./chart-config"

export const CryptoChart = ({
  data,
  chartTitle,
}: {
  data: [number, number][]
  chartTitle: string
}) => {
  const chartRef = useRef<any>(null)
  Chart.register(...registerables)

  useEffect(() => {
    const myChart = new Chart(
      chartRef.current,
      buildChartConfig(data, chartTitle),
    )
    return () => {
      myChart.destroy()
    }
  }, [data, chartTitle])

  return (
    <ChartContainer>
      <canvas ref={chartRef} id="myChart"></canvas>
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  height: 50vw;
  width: 75vw;
  @media (max-width: 480px) {
    width: 100vw;
    height: 150vw;
  } ;
`
