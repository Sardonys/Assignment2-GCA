import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";
class WeatherCard extends Component {

    render() {
        let weather=this.props.data;
        const styles = {
           width:'1000px',
           marginLeft:'auto',
           marginRight:'auto',
           marginTop:'100px' 
          }
          const style1={

          }
        return (
            <Card style={styles}  variant="outlined">
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                {weather.name}
              </Typography>
              <Typography color="textSecondary">
              <div>
                       SunRise : {new Date(weather.sys.sunrise).toLocaleString()}
                   </div>
                   <div>
                       SunSet : {new Date(weather.sys.sunset).toLocaleString()}
                   </div>
              </Typography>
                         </CardContent>
                         <Grid container  spacing={2} style={{marginTop:20}}>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Temperature</div>
                           <div>{weather.main.temp}</div>
                       </Grid>
                       <Grid item xs="3" sm="2" style={{margin:10}}>
                           <div>Min Temperature</div>
                           <div>{weather.main.temp_min}</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>MAx Temperature</div>
                           <div>{weather.main.temp_max}</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Pressure</div>
                           <div>{weather.main.pressure}</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Humidity</div>
                           <div>{weather.main.humidity}</div>
                       </Grid>
                   </Grid>
           </Card>
        );
    }
}

export default WeatherCard;