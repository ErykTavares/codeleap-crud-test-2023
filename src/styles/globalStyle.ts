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

				.delete-title {
					margin-top: 0.8rem;
					padding: 0.8rem !important;
					font-size: 1.2rem !important;
					font-weight: 700;
					line-height: 26px;
					text-align: start;
				}

				.delete-actions {
					display: flex;
					flex-direction: row-reverse;
					justify-content: end;
					margin: 0 0.5rem;

					.delete-btn-cancel {
						background: #ffff;
						border: 1px solid ${theme.colors.lightGray};
						border-radius: 8px;
						color: black;
					}

					.delete-btn-confirm {
						background: ${theme.colors.red};
						border-radius: 8px;
					}
				}

				.pop-modal {
					animation: pop 1s forwards ease-in-out;
				}
				.unpop-modal {
					animation: unpop 1s forwards ease-in-out;
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
