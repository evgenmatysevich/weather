import React from "react";
import "./weather.css"



const Weather = (props) => {
    return (
            <div className="weather">
                { props.city &&
                    <div>
                <p>Местоположение: {props.city},{props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Влажность: {props.humidity}</p>              
                    </div>
                }
                <p>{props.error}</p>
           </div>
    );
}
export default Weather;