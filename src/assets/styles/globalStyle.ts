import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     ${({ theme }) => css`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					list-style-type: none;
					text-decoration: none;
					font-family: 'Roboto', sans-serif;
				}

				a,
				a:hover,
				ul,
				li,
				button {
					all: unset;
				}

				main {
					width: 100%;
					min-height: 100vh;
					display: flex;
					flex-direction: column;
					align-items: start;
					justify-content: start;
				}

				section {
					width: 100%;
					height: calc(100vh - 100px - 60px);
					overflow-y: auto;
					overflow-x: hidden;
					scroll-behavior: smooth;
				}

				img {
					max-width: 100%;
					height: auto;
				}

				.sweet-custom-delete-title {
					margin-top: 0.8rem !important;
					padding: 0.8rem !important;
					font-size: 1.2rem !important;
					font-weight: 700 !important;
					line-height: 26px !important;
					text-align: start !important;
				}

				.sweet-custom-delete-actions {
					display: flex !important;
					flex-direction: row-reverse;
					justify-content: end !important;
					margin: 0 0.5rem !important;

					.sweet-custom-delete-btn-cancel {
						background: #ffff;
						border: 1px solid ${theme.colors.lightGray};
						border-radius: 8px;
						color: black;
						padding: 0;
					}

					.sweet-custom-delete-btn-confirm {
						background: ${theme.colors.red};
						border-radius: 8px;
						padding: 0;
					}
				}

				.sweet-custom-btn {
					width: 120px;
					display: flex !important;
					align-items: center;
					justify-content: center;
					height: 34px;
				}

				.pop-modal {
					animation: pop 0.5s forwards ease-in-out;
				}
				.unpop-modal {
					animation: unpop 0.5s forwards ease-in-out;
				}

				@keyframes pop {
					from {
						opacity: 0;
						transform: scale(0);
					}
					to {
						opacity: 1;
						transform: scale(1);
					}
				}

				@keyframes unpop {
					from {
						opacity: 1;
						transform: scale(1);
					}
					to {
						opacity: 0;
						transform: scale(0);
					}
				}
			`}
`;
