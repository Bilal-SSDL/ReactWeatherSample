var React = require('react');

// var About= React.createClass({
//     render: function () {
//         return (       
//                 <h2> About Component </h2>
//            );
//     }
// });

var About = (props) => {
    return (   
        <div>    
        <h1 className="text-center"> About Component </h1>
        <p>
            This is the weather application build on React. I have complete this for practicing my react skills.
        </p>
        <p>
            Here are the links of some of the tools and technologies whic I used for my app.
        </p>
        <ul>
            <li>
                <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used
            </li>
            <li>
                <a href="http://openweathermap.org">Open Weather Map </a> - I used Open Weather Map to search for weather data by city name.
            </li>
        </ul>
        </div>

   );
    
}

module.exports = About;