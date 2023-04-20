import styled, { css } from 'styled-components';

export const ContainerStyle = styled.div`
	max-width: 650px;
	width: 100%;
	height: 350px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	margin: 1rem 0;
	padding: 1.5rem 2rem;
	border-radius: 0.5rem;
	box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

	h3 {
		font-weight: 700;
		font-size: 1.375rem;
		line-height: 26px;
	}
`;

export const InputsWrapperStyle = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
	`}
`;
