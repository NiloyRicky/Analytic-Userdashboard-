import React,{useEffect} from 'react'
import {Chart as ChartJs,defaults} from 'chart.js/auto';
import {Doughnut,Bar,Line} from 'react-chartjs-2';
import { data } from '../Dashboard/Data';
import {useSelector,useDispatch} from 'react-redux';
import {initializeUsers,calculateUserCounts} from '../../store/Analytic.ts'
function DoughnutChart() {
const dispatch=useDispatch();
const activeCount=useSelector((state)=>state.analytic.activeCount);
const inactiveCount=useSelector((state)=>state.analytic.inactiveCount);


useEffect(()=>{
    dispatch(initializeUsers(data));
    dispatch(calculateUserCounts())

},[dispatch])


  return (
      <Doughnut
              data={{
                labels:["Active Users","Inactive Users"], //X axis
                datasets:[{
                  label:"User Status",
                  data:[activeCount,inactiveCount],//y axis
                  backgroundColor:[
                    "yellow",
                    "red",
                    ,
                  ] ,
                  borderRadius:5
                }]
                            }}
                            
                            options={{
                              plugins: {
                                title: {
                                  display: true,
                                  text: "Active Users v/s Inactive Users"
                                }
                              }
                            }}
                            
                            />
  )
}

export default DoughnutChart