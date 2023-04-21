import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-self: start;
	justify-self: start;
	background-color: black;
	color: white;
	padding: 0 3rem;

	h1 {
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const ProfileStyle = styled.div<{ color: string }>`
	${({ theme, color }) => css`
		width: 210px;
		height: 50px;
		display: flex;
		align-items: start;
		justify-content: start;

		.profile-img {
			width: 50px;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			background: ${theme.colors[color as never]};
			font-size: 1.375rem;
			text-transform: uppercase;
			border: 1px solid #364458;
			margin-right: 0.8rem;
		}

		.dropdown {
			position: relative;
			width: 150px;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: start;

			p {
				font-size: 1rem;
			}

			.chevron-svg {
				margin-top: 0.2rem;
				cursor: pointer;
				transition: 0.3s;
			}
		}

		nav {
			position: fixed;
			top: 80px;
			right: 74px;
			width: 120px;
			height: 70px;
			background-color: #fff;
			border-radius: 0.5rem;
			box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
			color: black;
			padding: 0.5rem 1rem;

			ul {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: start;

				li {
					min-width: max-content;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-evenly;
					cursor: pointer;
					margin-bottom: 0.3rem;

					svg {
						font-size: 1.2rem;
					}
				}
			}
		}
	`}
`;
