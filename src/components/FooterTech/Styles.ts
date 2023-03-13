import styled from 'styled-components';

interface Props {
	borderTp: boolean;
}

export const FooterTechWrapper = styled.footer<Props>`
	background-color: var(--bg-dark);
	color: var(--color-white);
	border-top: ${(props) => (props.borderTp ? `1px solid var(--color-white)` : `0`)};
	min-height: 80px;
	display: flex;
	align-items: center;
	margin: 0px 25px;

	.footerTech__Container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 0px 25px;
	}
`;
