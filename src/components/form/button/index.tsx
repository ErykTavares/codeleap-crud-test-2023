import React from 'react';
import { ButtonStyle } from './style';

interface IButtonProps {
	children: string;
	type?: 'submit' | 'button' | 'reset';
	disabled?: boolean;
	onClick?: () => void;
	backgroundColor?: string;
	color?: string;
}

const Button = ({
	children,
	type,
	onClick,
	disabled,
	backgroundColor,
	color
}: IButtonProps): JSX.Element => (
	<ButtonStyle
		type={type || 'button'}
		onClick={onClick}
		disabled={disabled}
		backgroundColor={backgroundColor}
		color={color}
	>
		{children}
	</ButtonStyle>
);
export default Button;
