import React, { Component } from 'react';
import ListAlbum from './ListAlbum'

class Album extends Component {
  render() {
    return (
      <div className="App">
        <main>

          <ListAlbum id={this.props.match.params.id}  />

        </main>

        <footer>
          <p>This is FOOTER</p>
        </footer>
      </div>
    );
  }
}

export default Album;
