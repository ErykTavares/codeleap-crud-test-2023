import styled, { css } from 'styled-components';

export const ContainerStyle = styled.div`
	${({ theme }) => css`
		max-width: 650px;
		width: 100%;
		height: 400px;
		margin-bottom: 2rem;
		box-shadow: ${theme.boxShadow};
		border-radius: 0.5rem;

		.title {
			width: 100%;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 1.8rem;
			color: ${theme.colors.lightGray};

			@media screen and (${theme.media.tablet}) {
				flex-direction: column;
				align-items: start;
				justify-content: start;
			}
		}

		.content {
			width: 100%;
			height: calc(95% - 70px - 50px);
			padding: 1rem 1.8rem;
			overflow-y: auto;
			overflow-x: hidden;

			p {
				text-align: justify;
				font-weight: 400;
				word-break: break-word;
			}
		}
	`}
`;

export const PostHeaderStyle = styled.header`
	${({ theme }) => css`
		width: 100%;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.8rem;
		background-color: ${theme.colors.blue};
		border-radius: 0.5rem 0.5rem 0 0;
		color: white;
		margin-bottom: 0.5rem;

		h2 {
			width: calc(100% - 80px);
			font-weight: 300;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin-right: 0.5rem;
			margin-bottom: 0;
			font-size: 1.375rem;
		}

		ul {
			min-width: 80px;
			display: flex;
			justify-content: space-between;

			svg {
				cursor: pointer;
				transition: 0.3s;
				path {
					transition: 0.3s;
				}

				&:hover {
					transform: scale(1.2);
				}
			}

			.trash-svg {
				&:hover {
					path {
						fill: ${theme.colors.red};
					}
				}
			}

			.edit-svg {
				&:hover {
					path {
						fill: ${theme.colors.lightGreen};
					}
				}
			}

			.trash {
				padding-top: 2px;
			}
		}
	`}
`;
