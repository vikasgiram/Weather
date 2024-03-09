import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Info.css"

export default function Info({info}){
    return(
    <div className='infoBox'>
        

        <Card sx={{ maxWidth: 345 }} className='card'>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image='https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.name}
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