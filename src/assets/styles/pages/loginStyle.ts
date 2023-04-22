import styled from 'styled-components';

export const ContainerStyle = styled.section`
	height: calc(100vh - 60px);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LoginWrapperStyle = styled.div`
	width: 100%;
	max-width: 500px;
	height: max-content;
	min-height: 270px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	padding: 2rem 1.5rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	.title-container {
		h2 {
			font-size: 1.5rem;
			font-weight: bold;
		}
	}
`;
