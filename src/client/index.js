import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

export default class Hello extends Component {
  render() {
    return (
      <div className="test">
        Hello  world
      </div>
    );
  }
}

render(<Hello />, document.getElementById('react-root'));
