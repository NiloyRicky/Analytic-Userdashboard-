import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';




  
  

  
  function SideMenu() {
    const navigate=useNavigate()
    return (
      <div className='SideMenu'>
        <Menu onClick={(item)=>{navigate(item.key)}} items={[{
          label:"User Dashboard",
          icon:<AppstoreAddOutlined/>,
          key:"/",
          
        },
        {
           label:"Analytics",
           icon:<ShopOutlined/>,
          key:"/inventory"
        },
       
        ]}>
  
        </Menu>
      </div>
  );
}

export default SideMenu;