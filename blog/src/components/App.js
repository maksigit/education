import React, { Component } from 'react';
import Links from './Links'
import ListPosts from './ListPosts'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Links />
        </header>

        <main>

          <ListPosts />

        </main>

        <footer>
          <p>This is FOOTER</p>
        </footer>
      </div>
    );
  }
}

export default App;
