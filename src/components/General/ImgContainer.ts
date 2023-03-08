import styled from 'styled-components';

interface Props {
	figWidth?: string;
}

export const ImgContainer = styled.figure<Props>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => (props.figWidth ? props.figWidth : '100px')};

	img {
		width: 100%;
		height: 100%;
	}
`;
