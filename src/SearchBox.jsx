import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Info from './Info';

export default function SearchBox(){

    let [city,setCity]=useState('');
    let [info,setInfo]=useState({name:"Pune", temp:"22.3", maxTemp:"33.5", minTemp:"20.3", humidity:"11", pressure:"1013", weather:"clear", feelsLike:"28.93"});

    let URL='https://api.openweathermap.org/data/2.5/weather';
    let API_Key='cc2fda3c424a409553c25bbb09b4189d';

    let handleSubmit=(evt)=>{
        evt.preventDefault();
        setCity("");
        getWeatherInfo();
    }

    let getWeatherInfo= async ()=>{
        // let response=await fetch(`${URL}?q=${city}&appid=${API_Key}&units=metric`);
        // let res=await response.json();
        let res={name:"Pune", temp:"22.3", maxTemp:"33.5", minTemp:"20.3", humidity:"11", pressure:"1013", weather:"clear", feelsLike:"28.93"};
        setInfo(res);
        console.log(res);
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
        </form>
        
        
    </div>
    );    
}