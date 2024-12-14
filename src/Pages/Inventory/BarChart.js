import React, { useEffect } from 'react'
import {Chart as ChartJs,defaults} from 'chart.js/auto';
import {Doughnut,Bar,Line} from 'react-chartjs-2';

import {useSelector,useDispatch} from 'react-redux';
import {calculateRoleCounts,initializeUsers,calculateUserCounts} from '../../store/Analytic.ts'

import { data } from '../Dashboard/Data';

function BarChart() {
  const dispatch=useDispatch();
  const roleCounts=useSelector((state)=>state.analytic.roleCounts);
  useEffect(()=>{

//dispatch(initializeUsers(data));       // Initialize users
    dispatch(calculateUserCounts());
    dispatch(calculateRoleCounts()); 
    console.log(roleCounts)  ;     // Calculate Active/Inactive counts
  },[dispatch]);

  const labels = Object.keys(roleCounts);
  const dataValues = Object.values(roleCounts);

   // Define background and border colors dynamically based on the number of roles
   const backgroundColors = [
    "rgba(23,56,78,0.5)",
    "rgba(148, 247, 29, 0.25)",
    "rgba(108, 87, 209, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    // Add more colors if you have more roles
  ];

  const borderColors = backgroundColors.map(color => color.replace('0.5', '1')); // Make borders fully opaque

  
  return (
    
        <Bar
      
        data={{
          labels: labels, // Roles on X-axis
          datasets: [{
            label: "Number of Users per Role",
            data: dataValues, // Counts on Y-axis
            backgroundColor: backgroundColors.slice(0, labels.length),
            borderColor: borderColors.slice(0, labels.length),
            borderWidth: 0.5,
          }]
        }}
                
                          
                            options={{
                              plugins: {
                                title: {
                                  display: true,
                                  text: "Users by Roles"
                                }
                              }
                            }}
                            
                            />
    
  )
}

export default BarChart