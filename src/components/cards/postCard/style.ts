import styled, { css } from 'styled-components';

export const ContainerStyle = styled.div`
	${({ theme }) => css`
		max-width: 650px;
		width: 100%;
		height: 350px;
		margin-bottom: 2rem;
		box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
		border-radius: 0.5rem;

		.title {
			width: 100%;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 1.8rem;
			color: ${theme.colors.lightGray};
		}

		.content {
			width: 100%;
			padding: 1rem 1.8rem;

			p {
				text-align: justify;
				font-weight: 400;
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
			font-weight: 300;
		}

		ul {
			min-width: max-content;
			width: 15%;
			display: flex;
			justify-content: space-between;

			svg {
				cursor: pointer;
				transition: 0.3s;
				&:hover {
					transform: scale(1.2);
				}
			}

			.trash {
				padding-top: 2px;
			}
		}
	`}
`;
