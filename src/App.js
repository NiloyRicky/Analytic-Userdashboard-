import React, { useState } from 'react'
import './index.css';
import {Space} from 'antd'
import {Provider} from 'react-redux'
import AppHeader from './Componenets1/AppHeader'
import SideMenu from './Componenets1/SideMenu'
import AppContent from './Componenets1/AppContent'
import AppFooter from './Componenets1/AppFooter'
import store from './store/store';
function App() {
  
  return (
  <Provider store={store}>
    <div className='App'>
   <AppHeader  />
 <Space className='SideMenuAndAppContent'>
   <SideMenu></SideMenu>
   <AppContent></AppContent>
 </Space>
 <AppFooter/>
 </div>
 </Provider>

    
   
  )
}

export default App