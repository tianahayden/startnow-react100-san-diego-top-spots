import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }


  render() {

    var headerStyle = {
      width: '80vw',
      margin: '5vw 1vw 2vw 1vw',
    }

    return (
      <div className='App'>
        <div className='container justify-content-center'>
          <div className='row justify-content-center'>
            <div className='card' style={headerStyle}>
              <div className='card-body text-center'>
                <div className="col">
                  <h1>San Diego Top Spots</h1>
                  <p>A list of 30 places to see in San Diego, California.</p>
                </div>
              </div>
            </div>
          </div>
          {
            this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location} />
            ))
          }
        </div>
      </div>



    );
  }
}

export default App;
