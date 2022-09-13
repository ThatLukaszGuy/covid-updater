import React from 'react'
import Searchbar from './Searchbar'
import {Box , Typography} from '@mui/material'

export default function Search() {
  return (
    <div>
      <Typography variant='h3' color='secondary' sx={{marginTop:'70px'}}>Search by country</Typography>
      <Box
        sx={{ bgcolor: 'background.paper',  minHeight: '60vh', borderRadius: '20px', boxShadow: 3, marginTop:'10px', display: 'grid', placeItems: 'center' }}
        id='world'
        
      >
          <Searchbar />
          
      </Box>

    </div>
  )
}
