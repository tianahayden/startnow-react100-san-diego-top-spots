import React, { Component } from 'react';

class App extends Component {
  render() {
    var headerStyle = {
      width: '80vw',
      margin: '5vw 1vw 2vw 1vw',
    }

    var cardStyle = {
      width: '80vw',
      margin: '1vw',
    }

    return (
      <div className='App'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div class="col">
              <div className='card' style={headerStyle}>
                <div className='card-body text-center'>
                  <h1>San Diego Top Spots</h1>
                  <p>A list of 30 places to see in San Diego, California.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div class="col">
              <div className='card' style={cardStyle}>
                <div className='card-body'>
                  <p>Next item</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div class="col">
              <div className='card' style={cardStyle}>
                <div className='card-body'>
                  <p>Next item</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default App;
