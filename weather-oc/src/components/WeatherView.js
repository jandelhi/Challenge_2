import React from 'react';

function WeatherView(props){
    const statistics = props.stats.map( (s) => {
        return (
         <div key={Object.keys(s)[0]}>
           {Object.keys(s)} : {s[Object.keys(s)]} 
         </div>
        );
});
 
    return (
        <div id = "weatherView">
            <h2>{props.city}</h2>
            <h1>{props.temp} F</h1>
            <span>{statistics}</span>
        
        </div>
    )
}



export default WeatherView;