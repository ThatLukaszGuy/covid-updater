import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Container maxWidth='xl' sx={{marginTop:'50px', marginBottom:'50px'}}>
      <Typography variant='h5' textAlign='center' color='success.main'> Thank You For Visiting! </Typography>

    </Container>
  )
}
