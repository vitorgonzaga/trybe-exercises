import React from 'react';
import '../App.css'

class Pokemon extends React.Component {
  render () {
    const { pokemon } = this.props;
    return (
      <div className="card-pokemon">
        <h4>{pokemon.name}</h4>
        <h4>{pokemon.type}</h4>
        <h4>`Average weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`</h4>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    );
  }
}

export default Pokemon;