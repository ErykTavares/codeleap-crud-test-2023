import React from 'react';
import { ButtonStyle } from './style';

interface IButtonProps {
	className?: string;
	children: string;
	type?: 'submit' | 'button' | 'reset';
	disabled?: boolean;
	onClick?: () => void;
	backgroundColor?: string;
	color?: string;
}

const Button = ({
	className,
	children,
	type,
	onClick,
	disabled,
	backgroundColor,
	color
}: IButtonProps): JSX.Element => (
	<ButtonStyle
		className={className || ''}
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
