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

    var backgroundStyle = {
      backgroundImage: 'url("https://media.sandiegoreader.com/img/blogs/entry_img/2012/Sep/25/readerpostcards2_t670_t658.jpg?ff95ca2b4c25d2d6ff3bfb257febf11d604414e5")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '500px',
      position: 'sticky',
      top: '0',
    }


    return (
      <div className='App'>
        <div className='container justify-content-center'>
        <div style={backgroundStyle}></div>
          <div className='row justify-content-center'>
            <div className='card' style={headerStyle}>
              <div className='card-body text-center bg-primary text-white border border-dark'>
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
