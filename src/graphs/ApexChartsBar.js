import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function ApexChartsBar() {

  const [options, setOptions] = useState({
    chart: {
      background: '#f4f4f4',
      foreColor: '#333'
    },
    xaxis: {
      categories: [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Philadelphia",
        "Phoenix",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose"
      ]
    },
    fill: {
      colors: ["#F44336"]
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Largest US Cities By Population",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px"
      }
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
  });
  const [series, setSeries] = useState([{

    name: 'Population', 
    data: [
        8550405,
        3971883,
        2720546,
        2296224,
        1567442,
        1563025,
        1469845,
        1394928,
        1300092,
        1026908
    ]
  }]);

  const onClick = () => {
    setOptions({
      chart: {
        background: '#f4f4f4',
        foreColor: '#333'
      },
      xaxis: {
        categories: [
          "New York",
          "Los Angeles",
          "Chicago",
          "Houston",
          "Philadelphia",
          "Phoenix",
          "San Antonio",
          "San Diego",
          "Dallas",
          "San Jose"
        ]
      },
      fill: {
        colors: ["#F44336"]
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Largest US Cities By Population",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: "25px"
        }
      },
      plotOptions: {
        bar: {
          horizontal: !options.plotOptions.bar.horizontal
        }
      },
    })
  };

  return (
    <div className='container'>
      <Chart 
        options={options}
        series={series}
        type={'bar'}
        height={'450'}
        width={'100%'}

      />
      <button onClick={() => onClick()}>Change Direction</button>
    </div>
  )
}

export default ApexChartsBar