// http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json To get forecast
// https://codebeautify.org/jsonviewer To beautify
// https://ipgeolocation.abstractapi.com/v1/?api_key=1a2b58c1fc584e949462355781a6c12a To get Lat and Long 
let lat = '';
let lng = '';
let wind = '';
const latLng = 'https://ipgeolocation.abstractapi.com/v1/?api_key=1a2b58c1fc584e949462355781a6c12a';
const body = document.getElementById('weatherBody');

fetch(latLng)
.then(function(response){
    return response.json();
})
.then(function(data){
        lat = data.latitude;
        lng = data.longitude;
        console.log(data);
        const weatherApi = 'http://www.7timer.info/bin/api.pl?lon=' + lng + '&lat=' + lat + '&product=civillight&output=json';

        fetch(weatherApi)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            for(let i=0; i<7; i++){
                console.log(data.dataseries[i]);
                if(data.dataseries[i].wind10m_max==1){
                    wind = 'Below 0.3m/s (calm)';
                }
                else if(data.dataseries[i].wind10m_max==2){
                    wind = '0.3-3.4m/s (light)';
                    
                }else if(data.dataseries[i].wind10m_max==3){
                    wind = '3.4-8.0m/s (moderate)';
                }
                else if(data.dataseries[i].wind10m_max==4){
                    wind = '8.0-10.8m/s (fresh)';
                }
                else if(data.dataseries[i].wind10m_max==5){
                    wind = '10.8-17.2m/s (strong)';
                }
                else if(data.dataseries[i].wind10m_max==6){
                    wind = '17.2-24.5m/s (gale)';
                }
                else if(data.dataseries[i].wind10m_max==7){
                    wind = '24.5-32.6m/s (storm)';
                }
                else if(data.dataseries[i].wind10m_max==8){
                    wind = 'Over 32.6m/s (hurricane)';
                }
                body.innerHTML += '<tr><td>Day ' + (i+1 == 1 ? i+1 + ' (today)' : i+1) +' </td><td>' + data.dataseries[i].weather + '</td><td>' + data.dataseries[i].temp2m.max + ' °C</td><td>' + wind + '</td></tr>';
            }
        });
});

