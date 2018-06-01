import React, { Component } from 'react';
import ListUsers from './ListUsers'

class Users extends Component {

  render() {
    return (
      <div className="App">
        <main>

          <ListUsers />

        </main>

        <footer>
          <p>This is FOOTER</p>
        </footer>
      </div>
    );
  }
}

export default Users;
