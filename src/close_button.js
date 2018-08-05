'use strict';

class CloseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <button class="btn btn-primary" data-dismiss="modal" type="button">
          <i class="fa fa-times"></i>
          Close
      </button>
    );
  }
}

ReactDOM.render(<CloseButton />, document.getElementById('#closeButton'));
