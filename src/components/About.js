import React from 'react'
import { Typography,Box,Card, CardActions,CardContent, Button,Link} from '@mui/material'
import image from './images/medic.svg'


export default function About() {
  return (
    <div>      
      <Typography variant='h3'  sx={{marginTop:'70px' , color: '#673ab7'}}>About this page</Typography>
      <Box
      sx={{    borderRadius: '20px',  marginTop:'10px', display: {xs: 'flex' , md: 'grid'}, gridTemplateColumns: '1fr 1fr',placeItems:'center' , flexDirection: 'column',boxSizing: "border-box" ,width: '70vw'}}
      
      
    >
        
        <Card sx={{ width: {xs: '70vw', md:'45vw'},boxShadow: '0px 0px 0px 0px', marginBottom:'50px' ,bgcolor: 'transparent', zIndex:'1000'}}>
          <CardContent>

            <Typography variant="h4" component="div" color='success.main'>
              Hello, 
            </Typography>

            <Typography variant="body2">
              This is a simple React Application that fetches data from the Covid 19
              API and returns it based on what the user requested 
            </Typography>
          </CardContent>
          <CardActions>
            <Link href="https://github.com/ThatLukaszGuy/covid-updater" target='_blank' underline="none">
              <Button size="medium" variant='contained' color='success'>Source Code</Button>
            </Link>
          </CardActions>
        </Card>

        
        
        
        <img src={image} style={{width: 45+'vw' , zIndex: 1}}  alt=''/>

    
        
    </Box>
    </div>
  )
}
