//all api requests

//stats to filter for singular countries
const StatsOptions = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  headers: {
    'X-RapidAPI-Host': `covid-193.p.rapidapi.com`,
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
};

//stats for current world status 
const WorldOptions = {
  method: 'GET',
  url: "https://covid-193.p.rapidapi.com/statistics?country=all",
  headers: {
    'X-RapidAPI-Host': `covid-193.p.rapidapi.com`,
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
}

export {StatsOptions, WorldOptions};

