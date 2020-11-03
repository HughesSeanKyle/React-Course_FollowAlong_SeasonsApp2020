import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  //Initializing State
  constructor(props) {
    //super is reference to parents constructor function
    super(props);

    //Only direct assignment to this.state
    //Update state in future use setState
    this.state = { lat: null, errorMessage: '' }; //null - Not sure what lat is just yet

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //To update state use setState. 
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  };


  //React says we have to define render!
  render() {
    return (
      <div>
      Latitude: {this.state.lat} 
      <br />
      Error: {this.state.errorMessage}
      </div>
    ) 
  };
};

ReactDOM.render(
  <App />, document.querySelector('#root')
);

/*
1. setState will get component to instantly re-render
*/