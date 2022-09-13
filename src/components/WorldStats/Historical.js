import React,{useEffect,useState} from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
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

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
)

export const Historical = () => {

    const [value, setValue] = useState(moment(new Date()).utcOffset(0,false).format("YYYY-MM-DD"));
    const [data,setData] = useState([]);
    
    const historyOptions = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/history',
      params: {country: 'All', day: value},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };
    
    useEffect(() => {
      axios.request(historyOptions).then(function (response) {
        setData(response.data.response[0]);
        console.log(response.data.response[0])
      }).catch(function (error) {
        console.error(error);
      });
    },[value])

    const handleChange = (newValue) => {
      setValue(moment(newValue).format("YYYY-MM-DD"));
      
    };

    const chartData1 = {
      labels: ['new cases','critical', 'new deaths'],
      datasets: [{
        label: '# of Recorded',
          data: [
              data?.cases?.new,
              data?.cases?.critical,
              data?.deaths?.new,

          ],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  }

  const chartData2 = {
    labels: ['total cases','total deaths'],
    datasets: [{
        label: '# of Recorded',
        data: [
            data?.cases?.total,
            data?.deaths?.total,

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

    const options1 = {
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
// change to desired color -> primary.main
  return (
    <div style={{display:'flex', flexDirection: 'column', flexWrap: 'wrap', width:'50vw'}} >
      
        <LocalizationProvider  dateAdapter={AdapterMoment} >
                <MobileDatePicker
                  disableFuture={true}
                  label="Choose day to read data of"
                  inputFormat="YYYY-MM-DD"
                  value={value}
                  
                  onChange={handleChange}
                  renderInput={(params) => <TextField color='primary' {...params} />}
                />
            </LocalizationProvider>
        
          <Box sx={{display:'flex', flexDirection :{xs: 'column',md: 'row'}, flexWrap: 'wrap'}} >
              <Box sx={{height: '25vh' , width:{xs: '50vw',md: '25vw'} , marginRight: '2vw'}}>
                <Bar 
                    height={500}
                    width={300}
                    data={chartData1}
                    options={options1}
                />

              </Box>
              <Box sx={{height: '25vh' , width:{xs: '50vw',md: '23vw'}}}>
                  <Bar 
                      height={500}
                      width={300}
                      data={chartData2}
                      options={options1}
                  />

              </Box>
          </Box> 
        <div>
                {data !== [] && data !== null && data !== undefined && data
                  ? <div>
                    <Typography color='primary.main'>
                    Cases:<br/>
                    active: {data?.cases?.active}<br/>
                    critical: {data?.cases?.critical}<br/>
                    new: {data?.cases?.new}<br/>
                    recovered: {data?.cases?.recovered}<br/>
                    total: {data?.cases?.total}<br/>  
                    <br/>
                    Deaths:<br/>
                    total: {data?.deaths?.total}<br/>
                    new: {data?.deaths?.new}<br/>
                    </Typography>
                  </div> 
                  : <Typography color='primary.main'>No data yet :/</Typography>
                }
        </div>
  </div>
  )
}
