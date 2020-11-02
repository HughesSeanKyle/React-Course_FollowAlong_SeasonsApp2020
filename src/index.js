import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  //Initializing State
  constructor(props) {
    //super is reference to parents constructor function
    super(props);

    //Initial state
    this.state = { lat: null };
  }


  //React says we have to define render!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position), //success callback
      err => console.log(err)
    );

    return <div>Latitude: </div>
  };
};

ReactDOM.render(
  <App />, document.querySelector('#root')
);