import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import _ from 'lodash';

function GoogleChartsSetores() {
  
  const [chartData, setChartData] = useState([]);

  const loadData = (data) => {
    const values = _.groupBy(data, (value) => {
      return value.manufacturer
    });

    console.log('values',values);

    const result = _.map(values, (value, key) => {
       return [
         key,
         _.sumBy(values[key], (v) => v.sales)
       ];
    });

    console.log('result', result);

    return [
      ["Fabricante", "Vendas"], ...result
    ]
  }

  useEffect(() => {
    const data = [
      { manufacturer: "Ford",   model: "Ka",      sales: 3},
      { manufacturer: "Ford",   model: "Fiesta",  sales: 10},
      { manufacturer: "Ford",   model: "Focus",   sales: 5},
      { manufacturer: "Ford",   model: "Mustang", sales: 1},
      { manufacturer: "Honda",  model: "Civic",   sales: 10},
      { manufacturer: "Honda",  model: "Fit",     sales: 50},
      { manufacturer: "Toyota", model: "Corola",  sales: 70},
      { manufacturer: "Toyota", model: "Etios",   sales: 20},
      { manufacturer: "Volks",  model: "Gol",     sales: 100},
    ];

    setChartData(loadData(data))
  },[])
  return (
    <Chart chartType='PieChart' data={chartData} width={'100%'} height={'400px'} />
  )
}

export default GoogleChartsSetores