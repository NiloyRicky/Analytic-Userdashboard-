import React, { useRef } from 'react';


import "./index.css";
import {Chart as ChartJs,defaults} from 'chart.js/auto';
import {Doughnut,Bar,Line} from 'react-chartjs-2';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';

function Charts() {
    
      defaults.maintainAspectRatio=false;
      defaults.responsive=true

  return (
    <div className='graphbox'>
        <div className='box' style={{height:"350px"}}>
      <BarChart/>
     
        </div>
        <div className='box style={{height:"300px"}}'>
        <DoughnutChart/>
        </div>
        <div className='box' style={{height:"350px"}}>
          <LineChart/>
        </div>
    </div>
  )
}

export default Charts