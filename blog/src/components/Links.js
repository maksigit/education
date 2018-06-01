import React, { Component } from 'react';

class Links extends Component {

  render() {

    return (
      <div>
        <a className='link' href="/" > Блог </a>
        <a className='link' href="/albums"> Галерея </a>
        <a className='link' href="/users"> Пользователи </a>
      </div>
    );
  }
}

export default Links;