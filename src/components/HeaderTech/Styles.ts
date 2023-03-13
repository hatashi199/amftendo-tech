import styled from 'styled-components';
interface Props {
	borderBot: boolean;
}

export const HeaderTechWrapper = styled.header<Props>`
	background-color: var(--bg-dark);
	color: var(--color-white);
	border-bottom: ${(props) => (props.borderBot ? `1px solid var(--color-white)` : `0`)};
	min-height: 80px;
	display: flex;
	justify-content: space-between;
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
