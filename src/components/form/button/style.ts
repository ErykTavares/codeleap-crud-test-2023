import styled, { css } from 'styled-components';

interface IButtonStyledProps {
	backgroundColor?: string;
	color?: string;
}

export const ButtonStyle = styled.button<IButtonStyledProps>`
	${({ theme, backgroundColor, color, disabled }) => css`
		width: 120px;
		min-width: max-content;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${theme?.colors?.[backgroundColor as never] || 'initial'};
		color: ${color || 'initial'};
		font-size: 1.1rem;
		font-weight: 500;
		cursor: pointer;
		border: 1px solid ${theme?.colors?.[backgroundColor as never] || '#999999'};
		border-radius: 0.5rem;
		transition: all 0.3s;

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}

		&:hover {
			transform: ${disabled ? 'none' : 'scale(1.1)'};
			box-shadow: ${disabled ? 'none' : '0 5px 5px rgba(0, 0, 0, 0.3)'};
		}
	`}
`;
