'use strict';

const { Component } = React;
const { render } = ReactDOM;
import characters from '../json/characters.json';

class CloseButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-primary" data-dismiss="modal" type="button">
          <i className="fa fa-times"></i>
          Close
      </button>
    );
  }
}

render(<CloseButton />, document.getElementById('close-button'));
