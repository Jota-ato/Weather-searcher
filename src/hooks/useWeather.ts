import axios from 'axios';
import type { SearchType } from '../types';

export default function useWeather() {
    const fetchWeather = async (search: SearchType) => {
        const appId = import.meta.env.VITE_API_KEY;
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&limit=&appid=${appId}`;
            const { data } = await axios(geoUrl);
            
            const lat = data[0].lat;
            const lon = data[0].lon;
            
            const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${appId}`;
            const text = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${appId}`;
            console.log(text);
            console.log(weatherUrl);
            
            
        } catch (error) {
            console.log(error);
        }
    };
    return {
        fetchWeather
    };
}