import { QueryFunctionContext } from "@tanstack/react-query";
import type { ForecastData, CurrentDay } from "../types/weather";

interface QueryParams{
    q: string;
    [param: string]: string|number;
}

function buildFetchURL(api: string, params: QueryParams){
    const baseURL="https://api.weatherapi.com/v1/";
    const apiKey=import.meta.env.VITE_API_KEY;


    const URLWithoutParams=`${baseURL}${api}?key=${apiKey}`;

    let paramsURLString="";

    Object.entries(params).forEach(([key, value])=>{
        paramsURLString+=`&${key}=${value}`;
    })

    return URLWithoutParams+paramsURLString;
}

export async function getCurrentWeather(queryContext: QueryFunctionContext<[string, string]>): Promise<CurrentDay> {
    const location = queryContext.queryKey[1];

    const url = buildFetchURL("current.json", {q: location, aqi: "no"});
    return (await fetch(url)).json();
}

export async function getForecastWeather(queryContext: QueryFunctionContext<[string, string]>): Promise<ForecastData> {
    const location = queryContext.queryKey[1];

    const url = buildFetchURL("forecast.json", {q: location, days: 5, aqi: "no", alerts: "no"});
    return (await fetch(url)).json();
}