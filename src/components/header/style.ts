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

export const ProfileWrapperStyle = styled.div`
	${({ theme }) => css`
		width: 210px;
		height: 50px;
		display: flex;
		align-items: start;
		justify-content: start;
		cursor: pointer;

		@media screen and (${theme.media.tablet}) {
			justify-content: end;
		}
	`}
`;

export const ProfileImgStyle = styled.div<{ color: string }>`
	${({ theme, color }) => css`
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
	`}
`;

export const ProfileDropdownStyle = styled.div`
	${({ theme }) => css`
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
			cursor: pointer;
			transition: 0.3s;
		}

		@media screen and (${theme.media.tablet}) {
			display: none;
		}
	`}
`;

export const ProfileNavStyle = styled.nav`
	${({ theme }) => css`
		position: fixed;
		top: 80px;
		right: 74px;
		width: 120px;
		height: 70px;
		background-color: #fff;
		border-radius: 0.5rem;
		box-shadow: ${theme.boxShadow};
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

		@media screen and (${theme.media.tablet}) {
			right: 30px;
		}
	`}
`;
