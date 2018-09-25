var React= require('react');

var WeatherForm= React.createClass({
    // onFormSubmit: function(e) {
    //     e.preventDefault();
    //     var location = this.refs.cityName.value;
    //     if(location.length > 0)
    //     {
    //         debugger;
    //         this.refs.cityName.value = '';
    //         this.props.onSearch(location);   
    //     }
    // },
    onFormSubmit: function (e) {
        e.preventDefault();
    
        var location = this.refs.location.value;
    
        if (location.length > 0) {
          this.refs.location.value = '';
          this.props.onSearch(location);
        }
      },
    
    
    
    render: function() {
        return (
            <div>
                 <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Search weather by city"/>
            <button className=" hollow button success expanded">Get Weather</button>
          </form>

            </div>
        );

    }

});

module.exports = WeatherForm;