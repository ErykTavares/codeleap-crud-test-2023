import styled, { css } from 'styled-components';

export const ContainerStyle = styled.div`
	${({ theme }) => css`
		max-width: 650px;
		width: 100%;
		min-height: max-content;
		height: 390px;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		margin: 1rem 0;
		padding: 1.5rem 2rem;
		border-radius: 0.5rem;
		box-shadow: ${theme.boxShadow};

		h3 {
			font-weight: 700;
			font-size: 1.375rem;
			line-height: 26px;
			padding-left: 1rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	`}
`;

export const InputsWrapperStyle = styled.div`
	width: 100%;
	min-height: max-content;
	display: flex;
	align-items: center;
	justify-content: start;
`;
