interface QueryParams{
    q: string;
    [param: string]: string;
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

export async function getCurrentWeather() {
    const url = buildFetchURL("current.json", {q: "Gliwice", aqi: "no"});
    return (await fetch(url)).json();
}