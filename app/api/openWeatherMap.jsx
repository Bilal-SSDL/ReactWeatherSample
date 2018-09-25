var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=3052cb2d904dd928cc9729337df0de43&units=imperial';


// 3052cb2d904dd928cc9729337df0de43

// https://api.openweathermap.org/data/2.5/weather?appid=3052cb2d904dd928cc9729337df0de43

module.exports = {
    getTemp: function (location) {
            var encodedLocation = encodeURIComponent(location);
            var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

           return axios.get(requestUrl).then(function(res) {
             //  debugger;
                    if(res.data.cod && res.data.message)
                    {
                        throw new Error(res.data.message);
                    }
                    else
                    {

                            var fTemp= res.data.main.temp;
                            var fToCel = (fTemp - 32) * 5 / 9;
                            return fToCel;
                    }
            }, function(res){
                throw new Error(res.data.message);
            }
            )}
}