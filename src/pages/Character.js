import { useParams } from 'react-router-dom';
import '../css/Character.css';
import useCharacter from '../hooks/useCharacter';

function Character() {
	const { id } = useParams();

	const { loading, error, data } = useCharacter(id);

	console.log({ error, loading, data });

	if (error) return <div>Oops, something went wrong</div>;

	if (loading) return <div>Loading...</div>;

	return (
		<div className='Character'>
			<img src={data.character.image} width={750} height={750} />
			<div className='Character-content'>
				<h1>{data.character.name}</h1>
				<p>{data.character.gender}</p>

				<div className='Character-episode'>
					{data.character.episode.map((episode) => {
						return (
							<div key={data.character.id}>
								{episode.name} - <b>{episode.episode}</b>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Character;
