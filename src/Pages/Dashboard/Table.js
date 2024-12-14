import { Col,Row ,Table,Tag,Space, Button} from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


import {useSelector} from "react-redux"
function Tables({TableData,handleDelete}) {
  
const searchValue=useSelector((state)=>state.search.value);

const navigate=useNavigate();
 
  const handleView=(record)=>{
    navigate('/record',{
      state:{record} // using useNavigate u can also pass object,like a row in a "state object" and then useLocation can access that object
    });

  }

  // filtering dta on basis of search
  const filteredData=TableData.filter((row)=>(
    row.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()
   )
  ))
 const columns=[
        {
          title:"Name",
          dataIndex:"Name",
          key:"Name"
    
    },
    {
        title:"Email",
        dataIndex:"Email",
        key:"Email"
    
    },
    {
    title:"Role",
    dataIndex:"Role",
    key:"Role"
    
    },
    {
    title:"YearJoined",
    dataIndex:"YearJoined",
    key:"YearJoined",
   
    
    },

    {
      title:"Status",
      dataIndex:"Status",
      key:"Status",
      render:(_,text)=>(<Tag color={text.Status==="Active"?"green":"red"}>{text.Status}</Tag>)
      },
    {
    title:"Action",
    
    key:"Action",
    render:(_,record)=>(
        <Space size="middle"><Button type='primary' onClick={()=>handleView(record)}>View</Button><Button 
        onClick={()=>handleDelete(record.id)}danger>Delete</Button> </Space>
        
    )
    }
    
      
    ];
 
   
  return (
   <div style={{width:"100%", }} className='TableWrapper'>
     <Row gutter={16}>
        <Col span={19}>
      <Table className=" mt-4"columns={columns} dataSource={searchValue.length==0?TableData:filteredData} 
      pagination={{pageSize:5,}} />
     
        </Col>
      
    </Row>
  
   </div>
  )
}

export default Tables