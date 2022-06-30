import React from "react";
import { useState, useEffect } from "react";
import {StatsOptions} from "../../axios";
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Searchbar() {
    const [data, setData] = useState([])

    const [selectedCountry, setSelectCountry] = useState(null)

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
      
        axios.request(StatsOptions).then(function (response) {
        const countries = response.data.response
        
        setData(countries)
      })
    
    },[])
  



  
  return (
    <>


        <Autocomplete
            id="country-select-demo"
            sx={{ width: '70%' , paddingTop: '3rem'}}
            options={data}
            autoHighlight
            getOptionLabel={(option) => option.country}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>

                {option.country}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                {...params}
                color='secondary'
                label="Choose a country"
                inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                }}
                />
            )}

            value={selectedCountry}
            onChange={(_event, newCountry) => {
                setSelectCountry(newCountry)
            }}
        />

                      



        <Box sx={{ width:'70vw' }}>

            
            {selectedCountry ?

                <div >        
                    
                    <Typography variant='h6' color='secondary' sx={{marginBottom: '10px'}}>{selectedCountry.country}</Typography>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Cases
                        </Typography>
                        <Typography sx={{ color: 'secondary.main' }}>{selectedCountry.day}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Active: {selectedCountry.cases.active} <br/>
                            New: {selectedCountry.cases.new} <br/>
                            Critical: {selectedCountry.cases.critical} <br/>
                            Recovered: {selectedCountry.cases.recovered} <br/>
                            Total: {selectedCountry.cases.total}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Deaths</Typography>
                        <Typography sx={{ color: 'secondary.main' }}>
                            {selectedCountry.day}
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Total deaths: {selectedCountry.deaths.total} <br/>
                             New deaths: {selectedCountry.deaths.new}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Tests</Typography>
                        <Typography sx={{ color: 'secondary.main' }}>
                            {selectedCountry.day}
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Total Tests: {selectedCountry.tests.total}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Calendar */}

                    

                </div>


                : <Typography variant='h6' color='secondary' textAlign='center'> Awaiting input ... </Typography>
            }
        </Box>
            
            
        

    </>
  )

}
