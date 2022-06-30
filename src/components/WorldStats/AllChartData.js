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

export default function AllChartData() {
    
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
        labels: ['total cases','total deaths', 'total tests'],
        datasets: [{
            label: '# of Votes',
            data: [
                chart?.cases?.total,
                chart?.deaths?.total,
                chart?.tests?.total,

            ],
            backgroundColor: [
                'rgba(255, 205, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 205, 86, 1)',
                'rgba(153, 102, 255, 1)',
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
                        Total cases: {chart.cases.total} <br/>
                        Total deaths: {chart.deaths.total} <br/>
                        Total Tests: {chart.tests.total ? chart.tests.total : 'Unable to fetch.'} <br/>

                       </Typography>
                   </div>
 
                 
                 :"fetching data...."}

            
            
            
        </div>
    </div>
  )
}