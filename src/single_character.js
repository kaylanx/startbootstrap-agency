'use strict';

const { Component } = React;
const { render } = ReactDOM;
import characters from '../json/characters.json';

class SingleCharacter extends Component {

  constructor(props) {
    super(props);
    this.state = { character: {} }
  }

  componentDidMount() {
    const character = characters.filter(function(character) {
      return character.name === 'bouncy';
    })[0];

    this.setState({character: character});
  }

  render() {

    const { character } = this.state;

    if (typeof character.name === 'undefined') {
      return null;
    }

    return (
      <div class="col-md-4">
        <a class="portfolio-link" data-toggle="modal" data-character={character.name} href="#characterModal">
         <img class="mx-auto rounded-circle" src={"img/characters/"+character.name+".jpg"} alt=""/>
        </a>
        <h4>{character.displayName}</h4>
        <p class="text-muted">
          {character.about}
        </p>
      </div>
    );
  }
}

render(<SingleCharacter/>, document.getElementById('single-character'));
