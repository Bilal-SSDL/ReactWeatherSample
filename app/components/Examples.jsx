var React = require('react');
var {Link} = require('react-router');

// var Examples= React.createClass({
//     render: function () {
//         return (       
//                 <h2> Examples Component </h2>
//            );
//     }
// });

var Examples= (props) => {
    return (
        <div>      
    <h1 className="text-center"> Examples </h1>
    <p> Here are some Examples locations to try out </p>

        <ol>
            <li>
                <Link to='/?location=Islamabad'>Islamabad</Link>
            </li>
            <li>
                <Link to='/?location=Lahore'>Lahore</Link>
            </li>
            <li>
                <Link to='/?location=Karachi'>Karachi</Link>
            </li>
        </ol>
        </div>
   );
}

module.exports = Examples;