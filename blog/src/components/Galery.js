import React, { Component } from 'react';
import ListGalery from './ListGalery'

class App extends Component {

  render() {
    return (
      <div className="App">
        <main>

          <ListGalery />

        </main>

        <footer>
          <p>This is FOOTER</p>
        </footer>
      </div>
    );
  }
}

export default App;
