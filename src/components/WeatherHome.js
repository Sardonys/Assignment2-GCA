import React, { Component } from 'react';
import {API} from './WeatherApi';
import WeatherCard from './WeatherCard';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

import Button from '@material-ui/core/Button';
class WeatherHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weatherData:[]
        };
    
        this.onChange = this.onChange.bind(this);
      }
    
      onChange(event) {
        this.setState({city: event.target.value});
      }
    
     
    getWeather=()=>{
        let self=this;
        API.getweather(this.state.city).then(function (res) {
            console.log(res.data);
            self.setState({
                weatherData:res.data
                })

        }).catch(function (error) {
            console.log(error);
        })
    };
    render() {
        return (
            <div>
          
        <TextField id="standard-basic" value={this.state.city}
           onChange={this.onChange}
           label="Standard" />
      
      <Button color="secondary" 
        onClick={this.getWeather}>Search</Button>
             
                <WeatherCard data={this.state.weatherData}/>
            </div>
        );
    }
}

export default WeatherHome;