import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';

import Title from './Title';
import EChartsReact from "echarts-for-react";


const data = {
    '互联网/IT': {
      '网络运维': [
        {
          name: '中位薪资',
          type: 'line',
          stack: 'Total',
          data: [8582, 11656, 11866, 13952, 13579]
        },
        {
          name: '平均薪资',
          type: 'line',
          stack: 'Total',
          data: [10204, 13510, 14783, 14519, 13033]
        },
      ],
      '移动应用开发':[
        {
          name:'薪资中位数',
          type:'line',
          stack:'Total',
          data:[17742,20668,24563,9098,27000]
        },
        {
          name:'薪资平均值',
          type:'line',
          stack:'Total',
          data:[18553,22723,24934,13820,27000]
        }
      ],
      'Web开发':[
        {
          name:'薪资中位数',
          type:'line',
          stack:'Total',
          data:[15212,20107,20197,21238,16600]
        },
        {
          name:'薪资平均值',
          type:'line',
          stack:'Total',
          data:[16381,21108,21148,18613,19734]
        }
      ],
      '人工智能':[
        {
          name:'薪资中位数',
          type:'line',
          stack:'Total',
          data:[27600,35592,38383,38346,34643]
        },
        {
          name:'薪资平均值',
          type:'line',
          stack:'Total',
          data:[27650,36593,38517,37735,35924]
        }
      ],
    }
}





export default function Chart({industry, subIndustry}) {
  const theme = useTheme();
  function getData() {
    console.log(industry, subIndustry)

    try {
      if (!industry || !subIndustry) {
        return [];
      }
      if (data[industry][subIndustry] !== undefined) {
        return data[industry][subIndustry];
      } else {
        return data['互联网/IT']['网络运维'];
      }
    } catch (e) {
      return data['互联网/IT']['网络运维'];
    }
  }
  let option = {
    title: {
      text: '薪资走势'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['中位薪资', '平均薪资'],
      orient: 'horizontal',
      top: 'bottom',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2020', '2021', '2022', '2023', '2024']
    },
    yAxis: {
      type: 'value'
    },
    series: getData()
  };

  return (
    <React.Fragment>
      <EChartsReact option={option} />
    </React.Fragment>
  );
}
