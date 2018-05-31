import React, { Component } from 'react';


class Links extends Component {

  render() {

    let styleLink = {
      display: 'inline-block',
      margin: 10
    };

    return (
      <div>
        <a style={styleLink} href=""> Блог </a>
        <a style={styleLink} href=""> Галерея </a>
        <a style={styleLink} href=""> Пользователи </a>
      </div>
    );
  }
}

export default Links;