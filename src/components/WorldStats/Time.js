import React from 'react'
import { useState, useEffect } from "react";
import { WorldOptions } from '../../axios';
import axios from 'axios'
import { Typography } from '@mui/material';


export default function Time() {
  
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.request(WorldOptions)
    .then(function (response) {
        const worldData = response.data.response[0]
        setData(worldData)
        
    })
  },[])
  
  
  return (
    <div style={{display: 'flex', flexDirection: 'column' ,height: '50vh' , width: '50vw', flexWrap: 'wrap'}}>    

            <Typography color='primary.main' > 
            Todays Data fetched on: 
            {data? `  ${data.day}` : 'loading'} <br/> 
            Full date: 
            {data? `  ${data.time}` : 'loading'}
            </Typography>

 


    </div>
  )
}
