'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const { Component } = React;
const { render } = ReactDOM;

class CloseButton extends Component {
  render() {
    return (
      <button className="btn btn-primary" data-dismiss="modal" type="button">
          <i className="fa fa-times" />
          Close
      </button>
    );
  }
}

/*eslint-env browser*/
render(<CloseButton />, document.getElementById('character-close-button'));
render(<CloseButton />, document.getElementById('strip-close-button'));
