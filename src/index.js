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

  //Will automatically be called once after component is rendered to the screen
  componentDidMount() {
    console.log('My component was rendered to the screen');
  };

  //When setState called or state updated componentDidUpdate will be called.
  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!');
  };


  //React says we have to define render!
  render() { 
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    };

    if (!this.state.errorMessage && this.state.lat) {
      return <div>LatitudeL {this.state.lat}</div>
    };

    return <div>Loading...</div>
  };
};

ReactDOM.render(
  <App />, document.querySelector('#root')
);

/*
1. setState will get component to instantly re-render
*/