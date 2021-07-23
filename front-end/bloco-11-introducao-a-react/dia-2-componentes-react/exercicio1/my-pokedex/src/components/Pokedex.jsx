import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render () {
    const { pokemons } = this.props
    return (
      <div className="div-pokedex">
        { pokemons.map(item => <Pokemon key={ item.name }  pokemon={ item } />) }
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: {
        value: PropTypes.number.isRequired,
        measurementUnit: PropTypes.string.isRequired
    },
    image: PropTypes.number.isRequired,
    moreInfo: PropTypes.number
  }),
}

export default Pokedex;