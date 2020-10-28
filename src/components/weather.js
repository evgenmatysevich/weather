import React from "react";



class Weather extends React.Component {
    render(){
        return (
            <div>
                { this.props.city &&
                    <div>
                <p>Местоположение: {this.props.city},{this.props.country}</p>
                <p>Температура: {this.props.temp}</p>
                <p>Восход солнца: {this.props.sunrise}</p>
                <p>Закат солнца: {this.props.sunset}</p>
                    </div>
                }
        </div>
    );
    }
}
export default Weather;