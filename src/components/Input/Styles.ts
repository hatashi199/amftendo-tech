import styled from 'styled-components';

export const LabelContainer = styled.label`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	h5 {
		font-size: 1rem;
	}

	h5::before {
		content: '';
		border: 2px solid var(--color-dark);
		margin-right: 5px;
	}

	input {
		padding: 1rem;
		font-size: 1.75rem;
		border: 4px solid var(--color-dark);
		border-radius: 4px;
	}
`;
