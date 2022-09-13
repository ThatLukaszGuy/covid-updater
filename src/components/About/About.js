import React from 'react'
import { Typography,Box, Button,Link} from '@mui/material'
import image from '../images/medic.svg'


export default function About() {
  return (
    <div>      
      <Typography variant='h3'  sx={{marginTop:'70px' , color: '#673ab7'}}>About this page</Typography>
      <Box
        sx={{marginTop:'10px', display: 'flex' , alignItems: 'center',flexDirection: {xs: 'column', md: 'row'}}}>
        
        <Box mb={'10px'}>
          <Typography variant="h4" component="div" color='success.main'>
              Hello, 
            </Typography>

            <Typography my={"10px"}>
              This is a simple React Application that fetches data from the Covid 19
              API and returns it based on what the user requested 
            </Typography>
            <Link href="https://github.com/ThatLukaszGuy/covid-updater" target='_blank' underline="none">
              <Button size="medium" variant='contained' color='success'>Source Code</Button>
            </Link>
        </Box>
        
        <Box>  
          <img src={image}  alt='' style={{maxWidth: '50vw'}}/>
        </Box>
      </Box>
    </div>
  )
}
