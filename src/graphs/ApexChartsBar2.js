import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function ApexChartBar2() {

  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        distributed: true
      }
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,      // you can either change hear to disable all grids
      xaxis: {
        lines: {
          show: true  //or just here to disable only x axis grids
        }
      },
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    },
    colors: ['#BAB1E3', '#0BE789', '#EDFF3C', '#F037B0']
  });

  const [series, setSeries] = useState([{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
  }]);

  return (
    <div>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  )
}

export default ApexChartBar2