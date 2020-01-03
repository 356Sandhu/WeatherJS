class Weather{
  constructor(city){
    this.apiKey = '3f49fc0740397c49729e0a5a2cff20b6';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);
    const responseData = await response.json();
    return responseData;
  }

  // Change location
  changeLocation(city){
    this.city = city;
  }
}


// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

// api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=3f49fc0740397c49729e0a5a2cff20b6


