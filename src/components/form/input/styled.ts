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

			.input-password-show {
				position: absolute;
				width: 20px;
				height: 20px;
				top: 10px;
				right: 18px;
				cursor: pointer;
				z-index: 2;
				color: ${theme.colors.gray};
			}
		}

		input {
			height: 47px;
			&::placeholder {
				text-align: center;
				color: ${theme.colors.pacificBlue.normal};
			}
			font-style: normal;
			font-weight: 600;
			font-size: 1rem;
			line-height: 15px;
		}
	`}
`;
