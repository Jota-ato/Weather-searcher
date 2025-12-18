import type { Weather } from "../hooks/useWeather";
import { convertKelvinToCelcius } from "../helpers";

type WeatherDetailProps = {
    weather: Weather
}

export default function WeatherDetail({ weather }: WeatherDetailProps) {
    const { temp, temp_max, temp_min  } = weather.main;

    return (
        <div className="bg-white p-4 rounded-xl text-center text-black">
            <h2 className="font-bold text-4xl">Clima de: {weather.name}</h2>
            <p className="text-[6rem] font-black my-8">{convertKelvinToCelcius(temp)}&deg;C</p>
            <div className="flex justify-center gap-20">
                <p className="font-black">Min: <span className="font-bold">{convertKelvinToCelcius(temp_min)}&deg;C</span></p>
                <p className="font-black">Min: <span className="font-bold">{convertKelvinToCelcius(temp_max)}&deg;C</span></p>
            </div>
        </div>
    );
}
