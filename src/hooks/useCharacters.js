import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
	query {
		characters {
			results {
				id
				name
				image
				gender
			}
		}
	}
`;

const useCharacters = () => {
	const { loading, error, data } = useQuery(GET_CHARACTERS);

	return {
		loading,
		error,
		data,
	};
};

export default useCharacters;
