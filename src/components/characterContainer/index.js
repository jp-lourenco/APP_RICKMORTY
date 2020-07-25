import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharacters } from '../../redux';
import CharacterCard from '../characterCard'


const CharacterContainer = ({ characterState, fetchCharacters }) => {
    useEffect(() => {
        fetchCharacters();  
    }, [fetchCharacters])

    return characterState.loading ? (
        <h2>Loading</h2>
    ) : characterState.error ? (
        <h2>{characterState.error}</h2>
    ) : (
        <div style={{backgroundColor: '#000'}}>
            <div style={{backgroundColor: '#000'}}>
                {characterState.characters &&
                    characterState.characters.map((character) => (
                        <CharacterCard
                            key={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            image={character.image}
                        />
                    ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        characterState: state.characterState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCharacters: () => dispatch(fetchCharacters()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterContainer);
  

