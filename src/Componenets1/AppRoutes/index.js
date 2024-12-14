import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard'
import Inventory from '../../Pages/Inventory';



import CardProfile from '../../Pages/Dashboard/Card';
import store from '../../store/store';
import { Provider } from 'react-redux';

function AppRoutes() {
  return (
    <Provider store={store}>
        <Routes>
        <Route path="/"  element={<Dashboard/>}/>
        <Route path="/inventory"  element={<Inventory/>}/>
        
        
        <Route path="/:id"  element={<CardProfile/>}/>
    </Routes>
    </Provider>
  
    
  )
}

export default AppRoutes