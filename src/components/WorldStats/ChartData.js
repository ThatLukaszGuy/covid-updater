import React from 'react'
import {
    Chart as ChartJS, 
    BarElement,
    CategoryScale,
    LinearScale, 
    PointElement,
    Title,
    Tooltip,
    Legend,} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import {useEffect, useState} from 'react'
import { WorldOptions } from '../../axios';
import axios from 'axios'
import { Typography } from '@mui/material';

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
)

export default function ChartData() {
    
    const [chart, setChart] = useState([])

    useEffect(() => {
        const fetchCases = async () => {
            try {
                const response = await axios.request(WorldOptions)
                setChart(response.data.response[0])
            } catch (err) {
                console.error(err)
            }
        }

        fetchCases()
    },[])


    const data = {
        labels: ['new cases','critical', 'new deaths'],
        datasets: [{
            label: '# of Recorded',
            data: [
                chart?.cases?.new,
                chart?.cases?.critical,
                chart?.deaths?.new,

            ],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    }
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 16
            }
        }
        
    }
  
  
  return (
    <div style={{display:'flex', flexDirection: 'column'}}>    
        <div style={{height: '50vh' , width: '50vw'}}>
            <Bar 
                height={500}
                width={300}
                data={data}
                options={options}
            />

        </div>
        <div>
            
                {chart?.cases?
                   <div>
                       <Typography color='primary.main' sx={{marginTop: '15px'}}>
                        All active cases: {chart.cases.active} <br/>
                        New cases: {chart.cases.new} <br/>
                        Critical: {chart.cases.critical} <br/>
                        New deaths: {chart.deaths.new} 
                       </Typography>
                   </div>
 
                 
                 :"fetching data...."}

            
            
            
        </div>
    </div>
  )
}
