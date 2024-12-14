import React from 'react'
import { Image, Input, Typography } from 'antd'
import {Space, Dropdown} from 'antd'
import {BellFilled, CiCircleOutlined, UserOutlined } from '@ant-design/icons'
import { useDispatch,useSelector } from 'react-redux';
import { setSearchValue } from '../../store/UserSlice';


function AppHeader() {
  
  const {Search}=Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const dispatch=useDispatch();
  const searchValue=useSelector((state)=>state.search.value || "");

  //const searchValue=useSelector((state)=>state.search.value);
  const handleSearch=(e)=>{
    dispatch(setSearchValue(e.target.value))//updating redux state
console.log(`hlo i  am ${setSearchValue}`)
  }
  return (
    <div className='AppHeader'>
    <Image src={`/components/Nlogo.jpg`} width={40}>jb</Image>
    <Search
      placeholder=" search name"
      onChange={handleSearch}
      onSearch={onSearch}
      style={{
        width: 400,
      }}
    />
  
    <Space>
      
      <UserOutlined style={{fontSize:24}}/>
      
    </Space>
    </div>
  )
}

export default AppHeader