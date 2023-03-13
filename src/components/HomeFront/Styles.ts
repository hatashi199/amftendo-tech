import styled from 'styled-components';

export const HomeFrontWrapper = styled.div`
	display: grid;
	grid-template-columns: 30vw 70vw;
	height: 100vh;
`;

export const HomeRightSide = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const HomeFrontContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const IconFrontContainer = styled.div`
	width: 100px;
	border: 10px solid var(--color-white);
	border-radius: 50%;
	padding: 1.5rem;
`;
