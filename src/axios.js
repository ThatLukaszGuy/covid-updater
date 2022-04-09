//all api requests

//stats to filter for singular countries
const StatsOptions = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  headers: {
    'X-RapidAPI-Host': `covid-193.p.rapidapi.com`,
    'X-RapidAPI-Key': `ebc2214f4amsh342a46e35f7dae6p1bae75jsnc0ca09e39866`
  }
};

//stats for current world status 
const WorldOptions = {
  method: 'GET',
  url: "https://covid-193.p.rapidapi.com/statistics?country=all",
  headers: {
    'X-RapidAPI-Host': `covid-193.p.rapidapi.com`,
    'X-RapidAPI-Key': `ebc2214f4amsh342a46e35f7dae6p1bae75jsnc0ca09e39866`
  }
}

export {StatsOptions, WorldOptions};

