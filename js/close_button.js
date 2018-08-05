'use strict';

class CloseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return React.createElement(
      "button",
      { "class": "btn btn-primary", "data-dismiss": "modal", type: "button" },
      React.createElement("i", { "class": "fa fa-times" }),
      "Close"
    );
  }
}

ReactDOM.render(React.createElement(CloseButton, null), document.getElementById('#closeButton'));