import React ,{useEffect}from 'react'
import {Doughnut,Bar,Line} from 'react-chartjs-2';
import { data } from '../Dashboard/Data';
function LineChart() {


  const aggregateByYear = (data) => {
    return data.reduce((acc, curr) => {
      acc[curr.YearJoined] = (acc[curr.YearJoined] || 0) + 1;
      return acc;
    }, {});
  };
  
  // Example usage
  const aggregatedData = aggregateByYear(data);

  useEffect(()=>{
aggregateByYear(data);
  })

  const labels = Object.keys(aggregatedData).sort(); // Sorted years
  const chartData = Object.values(aggregatedData);   // Count of users per year
  
  return (
    <Line data={{
        labels:labels,
      
          
          datasets:[{
            label:"Users Joined",
            data:chartData,//y axis
            backgroundColor:[
              "red",
              "yello",
              "rgba(108, 87, 209, 0.5)",
            ] ,
            borderRadius:5
          }
       ]
                      
      }}
      
      
      options={{
        elements:{line:{tension:0.3}},
        plugins: {
          title: {
            display: true,
            text: "Users Joined in Year"
          }
        }
      }}
      />
  )
}

export default LineChart