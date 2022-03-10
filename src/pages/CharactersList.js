import React from 'react';
import '../css/CharactersList.css';
import useCharacters from '../hooks/useCharacters';
import { Link } from 'react-router-dom';

function CharactersList() {
	const { loading, error, data } = useCharacters();

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Oops, something went wrong.</div>;

	return (
		<div className='CharactersList'>
			{data.characters.results.map((character) => {
				return (
					<Link to={`/${character.id}`}>
						<img src={character.image} />
						<h2>{character.name}</h2>
					</Link>
				);
			})}
		</div>
	);
}

export default CharactersList;
