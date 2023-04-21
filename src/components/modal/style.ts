import styled, { css } from 'styled-components';

export const ModalStyle = styled.div`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 1000;
	transition: 0.3s;
`;

export const WrapperStyle = styled.div`
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
		background-color: #fff;
		transition: 0.3s;

		.modal-title-container {
			h3 {
				font-weight: 700;
				font-size: 1.375rem;
				line-height: 26px;
			}
		}
	`}
`;
