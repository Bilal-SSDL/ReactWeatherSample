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
              <h3 className="text-center">{location} temperature is {temp} </h3>

        </div>
    );
}

module.exports = WeatherMessage;