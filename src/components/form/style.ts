import styled, { css } from 'styled-components';

export const FormStyle = styled.form`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding: 0.5rem;
`;

export const LabelStyle = styled.label`
	${({ theme }) => css`
		width: max-content;
		height: 28.65px;
		display: flex;
		align-items: center;
		justify: start;
		font-style: normal;
		font-weight: 700;
		font-size: 1.1rem;
		line-height: 1.375px;
		margin-bottom: 0.5rem;
		color: ${theme.colors.blue.normal};
	`}
`;
