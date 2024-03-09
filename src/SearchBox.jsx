import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city,setCity]=useState('');
    let [error,setError]=useState(false);

    let URL='https://api.openweathermap.org/data/2.5/weather';
    let API_Key='cc2fda3c424a409553c25bbb09b4189d';

    let handleSubmit=async (evt)=>{
        try{
            evt.preventDefault();
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            console.log(err);
            setError(true);
        }
    }


    let getWeatherInfo= async ()=>{
        try{
            let response=await fetch(`${URL}?q=${city}&appid=${API_Key}&units=metric`);
            let jsonRes=await response.json();
            let res={
                name:jsonRes.name,
                temp:jsonRes.main.temp,
                maxTemp:jsonRes.main.temp_max,
                minTemp:jsonRes.main.temp_min,
                humidity:jsonRes.main.humidity,
                pressure:jsonRes.main.pressure,
                weather:jsonRes.weather[0].main,
                feelsLike:jsonRes.main.feels_like,
                country:jsonRes.sys.country,
                sunrise:getStringTime(jsonRes.sys.sunrise),
                sunset:getStringTime(jsonRes.sys.sunset),
            }
        return res;

        }catch(err){
            throw err;
        }
        
    }

    let getStringTime=(timestamp)=>{
        let milSec=timestamp*1000;
        const dateObj=new Date(milSec);
        return (dateObj.toUTCString());
    }

    

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    return(
    <div className='searchBox'>
        <h2>Weather App</h2>
        <form onSubmit={handleSubmit}>
            <TextField className='text-field' value={city} onChange={handleChange} id='city' label='City' required variant='outlined'/>
            <div className="btn">
                <Button className='search-btn' endIcon={<SearchIcon/>} type='submit' variant="contained">Search</Button>

            </div>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
        </form>
        
        
    </div>
    );    
}