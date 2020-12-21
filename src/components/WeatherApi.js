import axios from 'axios';
import {CONFIG} from './config';
export class API {


    static  getweather =  async (cityName)=>{
         let url=
            CONFIG.WHETHER_API.replace('~',cityName);
        return await axios.get(url);
    }


}