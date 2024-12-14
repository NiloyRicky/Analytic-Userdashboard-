import React from 'react';
import { Button, Card,Tag } from 'antd';
import { useLocation,useNavigate } from 'react-router-dom';
const CardProfile = () => {
    const location=useLocation();
    const {record}=location.state || {};
    const navigate=useNavigate();

    return(
       <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
         <Card
       
       title="Details"
       className='DashboardCard '
       
       bordered={false}
       style={{
         width: 300,
       }}
     >
       <h2>Name:{record.Name}</h2><br/>
      <div style={{display:"flex", flexDirection:"column",gap:"5px"}}>
      <p style={{fontSize:"17px"}}>Email:{record.Email}</p>
       <p  style={{fontSize:"17px"}}>Role:{record.Role}</p>
       <p  style={{fontSize:"17px"}}>Joined: {record.YearJoined}</p>
      </div>
       <Tag color={record.Status==="Active"?"green":"blue"} style={{marginTop:"15px"}}>{record.Status}</Tag>
       
     </Card>
     <Button  primary onClick={()=>navigate('/')} className='mt-4' >BAck</Button>
       </div>
    )
}
   

;
export default CardProfile;