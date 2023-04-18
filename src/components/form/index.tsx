import React from 'react';
import { FormStyle } from './style';

interface IFormProps {
	children: JSX.Element | JSX.Element[];
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => {};
	method?: string;
}

const Form = ({ children, onSubmit, ...otherProps }: IFormProps): JSX.Element => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		await onSubmit(e);
	};
	return (
		<FormStyle onSubmit={handleSubmit} {...otherProps}>
			{children}
		</FormStyle>
	);
};

export default Form;
