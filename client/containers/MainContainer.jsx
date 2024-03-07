import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MainContainer = () => {
  const [ checkStatus, setCheckStatus ] = useState('not working');
  const [changeStatus, setChangeStatus] = useState(false);
  const getCheck = async() => {
    const res = await axios.get('/v1/check');
    setCheckStatus(res.data)
  }

  const handleClick = () => {
    setChangeStatus(!changeStatus)

    if (changeStatus) {
      return getCheck()
    } else {
      setCheckStatus('Not working again');
      return;
    }
  }
  return (
    <div className='main-container'>
      <h1>Main Container</h1>
        
      
      <button onClick={handleClick} className='button'>Change Status</button>
      <div>
        Status: {checkStatus}
      </div>
      
    </div>
  )
}

export default MainContainer