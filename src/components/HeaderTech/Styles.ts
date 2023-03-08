import styled from 'styled-components';

export const HeaderTechWrapper = styled.header`
	background-color: var(--bg-dark);
	color: var(--color-white);
	border-bottom: 1px solid var(--color-white);
	min-height: 80px;
	display: flex;
	align-items: center;
	margin: 0px 25px;

	.headerTech__Container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 0px 25px;
	}

	h2 {
		font-size: 2rem;
	}
`;
