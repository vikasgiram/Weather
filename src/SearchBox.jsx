import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBox(){

    let [city,setCity]=useState('');
    let URL='https://api.openweathermap.org/data/2.5/weather';
    let API_Key='cc2fda3c424a409553c25bbb09b4189d';

    let handleSubmit=(evt)=>{
        evt.preventDefault();
        setCity("");
        getWeatherInfo();
    }

    let getWeatherInfo= async ()=>{
        let response=await fetch(`${URL}?q=${city}&appid=${API_Key}`);
        let res=await response.json();
        console.log(res);
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    return(
    <>
        <h3>Weather App</h3>
        <form onSubmit={handleSubmit}>
            <TextField className='text-field' value={city} onChange={handleChange} id='city' label='City' required variant='outlined'/>
            <br />
            <br />
            <Button className='search-btn' endIcon={<SearchIcon/>} type='submit' variant="contained">Search</Button>
        </form>
    </>
    );    
}