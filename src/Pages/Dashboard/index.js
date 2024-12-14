import React,{useState} from 'react'
import { Space, Statistic, Typography,Card, Table } from 'antd'
import Tables from './Table';
import { data } from './Data';
import { UserAddOutlined, UsergroupDeleteOutlined,  UsergroupAddOutlined } from '@ant-design/icons'
function Dashboard() {
    const [TableData,setTableData]=useState(data);
    const[deleteCount,setDeleteCount]=useState(0)

//Delete functionality
const handleDelete=(index)=>{
  const update=TableData.filter((ele)=>{
    return (ele.id!==index)
   
    
  })
  console.log(`deleted:`);
  setTableData(update);
  setDeleteCount(prev=>prev+1);
 
}

//Active User Count usimg filter and length method
const activeUserCount= TableData.filter(active=>active.Status==="Active").length



  return (
    <>
    <div className='DashboardCardsWrapper'>
     <Typography.Title level={4}>
      <Space>

<DashboardCard icon={<UsergroupAddOutlined 
style={{color:"black", backgroundColor:"rgba(253, 253, 95, 0.461)",borderRadius:"50%",fontSize:"24px",padding:8}}
/>}title="Total Users" value={TableData.length}/>

<DashboardCard icon={<UserAddOutlined 
style={{color:"white", backgroundColor:"rgba(0,255,0,0.5)",borderRadius:"50%",fontSize:"24px",padding:8}}/>}
title="Active User" value={activeUserCount}/>

<DashboardCard icon={<UserAddOutlined 
style={{color:"white", backgroundColor:"rgba(250, 126, 215, 0.46)",borderRadius:"50%",fontSize:"24px",padding:8}}/>}
title="Inactive User" value={TableData.length-activeUserCount}/>

<DashboardCard 

icon={<UsergroupDeleteOutlined 
  style={{color:"white", backgroundColor:"rgb(252, 7, 7)",borderRadius:"50%",fontSize:"24px",padding:8}}/>}
  title="Deleted Users" value={deleteCount}/>




  

      </Space>
     </Typography.Title>
    </div>
    <Tables TableData={TableData} setTableData={setTableData} handleDelete={handleDelete}/></>
  )
}

function DashboardCard({icon,title,value}){
  return(
    <Card>
    <Space direction='horizontal'>
      {icon}
      <Statistic title={title} value={value}/>
    </Space>
  </Card>
  )
 
}
export default Dashboard