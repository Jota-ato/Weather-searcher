import axios from 'axios';
import { z } from 'zod';
import type { SearchType } from '../types';
import { useMemo, useState } from 'react';

// function isWeatherResponse(weather : unknown) : weather is Weather {
//     return (
//         Boolean(weather) &&
//         typeof weather === 'object' &&
//         typeof (weather as Weather).name === 'string' &&
//         typeof (weather as Weather).main.temp === 'number' &&
//         typeof (weather as Weather).main.temp_max === 'number' &&
//         typeof (weather as Weather).main.temp_min === 'number'
//     );
// } mala práctica, necesita mucha validación

// Zod
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        feels_like: z.number(),
        temp_min: z.number(),
        temp_max: z.number()
    })
});

export type Weather = z.infer<typeof Weather>;

const initialState = {
    name: '',
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        feels_like: 0
    }
};

export default function useWeather() {

    const [weather, setWeather] = useState<Weather>(initialState);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const fetchWeather = async (search: SearchType) => {
        setLoading(true);
        setWeather(initialState);
        const appId = import.meta.env.VITE_API_KEY;
        try {
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&limit=1&appid=${appId}`;
            const { data } = await axios(geoUrl);

            // Comprobar si existe
            if (!data[0]) {
                setNotFound(true);
                return;
            }
            
            const lat = data[0].lat;
            const lon = data[0].lon;
            
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            
            // const { data: weatherData } = await axios(weatherUrl);

            // const result = isWeatherResponse(weatherData);
            // if (result) {
            //     console.log(weatherData.name);
            // } es mala práctica pero asegura que funcione

            // Zod
            const { data: weatherData } = await axios(weatherUrl);
            const result = Weather.safeParse(weatherData);
            
            if (result.success) {
                setWeather(result.data);
            } else {
                throw new Error('Invalid weather data');
            }
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const hasWeatherData = useMemo(() => weather.name, [weather]);

    return {
        weather,
        hasWeatherData,
        loading,
        notFound,
        fetchWeather,
    };
}