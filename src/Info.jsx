import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Info.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function Info({info}){
    const rainURL='https://images.unsplash.com/photo-1503429134808-fdf0cd4e1bfa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const cloudURL='https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const coldURL='https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const clearURL='https://images.unsplash.com/photo-1691848749209-025ba660a194?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    let weatherImg=()=>{
        if (info.temp<=10) {
            return coldURL;
        }else if (info.weather=='Rain') {
            return rainURL;
        }else if(info.weather=='Clouds'){
            return cloudURL;    
        }else{
            return clearURL;
        }

    }
    return(
    <div className='infoBox'>

        <Card sx={{ maxWidth: 345 }} className='card'>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={weatherImg()}
                alt="Weather Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.name} {info.temp<=10?<AcUnitIcon></AcUnitIcon>:info.weather=='Cloud'?<ThunderstormIcon></ThunderstormIcon>:info.weather=="Rain"?BeachAccessIcon:<CloudIcon></CloudIcon>}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"spam"}>
                    <p>Weather: {info.weather}</p>
                    <p>temp: {info.temp}&deg;C</p>
                    <p>Feels Like: {info.feelsLike}&deg;C</p>
                    <p>temp Max: {info.maxTemp}&deg;C</p>
                    <p>temp Min: {info.minTemp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Pressure: {info.pressure}</p>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    </div>
    );
}