import styled, { css } from 'styled-components';

export const FooterStyle = styled.footer`
	${({ theme }) => css`
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: end;
		justify-self: end;
		background-color: #e5e5e5;

		h6 {
			cursor: pointer;
			font-weight: 600;
			transition: all 0.3s;

			&:hover {
				color: ${theme.colors.red};
			}
		}
	`}
`;
