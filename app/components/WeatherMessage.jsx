var React= require('react');

// var WeatherMessage= React.createClass({
//     render: function() {
//         return (
//             <div>
//                   <h2>{this.props.location} temperature is {this.props.temp} </h2>

//             </div>
//         );

//     }

// });

var WeatherMessage = ({temp,location}) => {
    return (
        <div>
              <h2>{location} temperature is {temp} </h2>

        </div>
    );
}

module.exports = WeatherMessage;