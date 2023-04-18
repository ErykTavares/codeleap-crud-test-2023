import styled from 'styled-components';

export const InputWrapperStyle = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: start;
	justify-content: start;
	padding: 0 0.5rem;
	margin-left: 0 !important;

	.input-container {
		position: relative;
	}

	input {
		height: 40px;
		font-style: normal;
		font-weight: 600;
		font-size: 1rem;
		line-height: 15px;
	}
`;
