'use strict';

import React from 'react';

const { Component } = React;

class SingleCharacter extends Component {

  constructor(props) {
    super(props);
    this.state = { character: props.character };
  }

  render() {
    const { character } = this.state;

    if (typeof character.name === 'undefined') {
      return null;
    }

    return (
      <div className="col-md-4" key={character.name}>
        <a
           className="portfolio-link"
           data-toggle="modal"
           data-character={character.name}
           href="#characterModal"
        >
         <img
           className="mx-auto rounded-circle"
           src={`img/characters/${character.name}.jpg`}
           alt=""
         />
        </a>
        <h4>{character.displayName}</h4>
        <p className="text-muted">
          {character.summary}
        </p>
      </div>
    );
  }
}

export default SingleCharacter;
