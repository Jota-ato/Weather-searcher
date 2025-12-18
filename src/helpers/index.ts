
export const convertKelvinToCelcius = (temp: number): number => {
    return parseInt((temp - 273.15).toString());
};