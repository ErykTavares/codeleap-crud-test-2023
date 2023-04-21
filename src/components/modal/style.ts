import styled from 'styled-components';

export const ModalStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 1000;
`;

export const WrapperStyle = styled.div`
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
	box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
	background-color: #fff;

	.modal-title-container {
		h3 {
			font-weight: 700;
			font-size: 1.375rem;
			line-height: 26px;
		}
	}
`;
