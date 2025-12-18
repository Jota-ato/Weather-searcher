import Form from "./components/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {

    const { fetchWeather, weather, hasWeatherData, loading } = useWeather();

    return (
        <>
            <h1 className="text-center text-[3rem] mt-20">Buscador de clima</h1>

            <div className="w-[95%] max-w-400 my-0 mx-auto md:grid md: grid-cols-2 md:items-center md:gap-16 mt-4">
                <Form
                    fetchWeather={fetchWeather}
                />
                {loading && <Spinner/>}
                {hasWeatherData &&
                    <WeatherDetail
                        weather={weather}
                    />}
            </div>
        </>
    );
}

export default App;
