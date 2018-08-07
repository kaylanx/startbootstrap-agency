'use strict';

import React from 'react';
import characters from '../json/characters.json';
import SingleCharacter from './single_character';

const { Component } = React;


class AllCharacters extends Component {

  constructor(props) {
    super(props);
    this.state = { characters: { } };
  }

  componentDidMount() {
    this.setState({ character: characters });
  }

  render() {
    const characterList = characters.map(
      character => <SingleCharacter key={character.name} character={character} />
    );
    return (
      <div className="row text-center">
         {characterList}
      </div>
    );
  }
}

export default AllCharacters;
