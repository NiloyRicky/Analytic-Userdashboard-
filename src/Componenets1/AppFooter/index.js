import { Typography } from 'antd'
import React from 'react'

function AppFooter() {
  return (
    <div className='AppFooter'  >
     
     <Typography.Link href="*">Privacy Policy</Typography.Link>
      <Typography.Link href="*">Terms & Use</Typography.Link>
      <Typography.Link href="*">FAQ</Typography.Link>
     
    </div>
  )
}

export default AppFooter