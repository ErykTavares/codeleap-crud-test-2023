import styled, { css } from 'styled-components';

export const TextAreaWrapperStyle = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: start;
		justify-content: start;
		padding: 0 0.5rem;
		margin-left: 0 !important;

		textarea {
			min-height: 120px !important;
			resize: none;
			&::placeholder {
				color: ${theme.colors.lightGray};
			}
		}
	`}
`;
