import styled, { css } from 'styled-components';

export const InputWrapperStyle = styled.div`
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

		.input-container {
			position: relative;
		}

		input {
			height: 40px;

			&::placeholder {
				color: ${theme.colors.lightGray};
			}
		}
	`}
`;
