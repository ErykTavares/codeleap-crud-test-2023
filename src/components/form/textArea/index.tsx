import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import { LabelStyle } from '../style';
import { TextAreaWrapperStyle } from './styled';

interface ITextAreaProps {
	label: string;
	placeholder?: string;
	autoComplete?: string;
	onChange: ChangeEventHandler<HTMLTextAreaElement>;
	errors?: any;
	onBlur?: FocusEventHandler<HTMLTextAreaElement>;
	value?: any;
	name: string;
	defaultValue?: string | number | string[];
}

const TextArea = React.forwardRef(
	(
		{
			label,
			placeholder,
			autoComplete,
			onChange,
			errors,
			onBlur,
			name,
			defaultValue,
			value
		}: ITextAreaProps,
		ref: React.LegacyRef<HTMLTextAreaElement>
	) => (
		<TextAreaWrapperStyle>
			{label ? (
				<LabelStyle className='col-md-12 col-form-label ps-0' htmlFor={name}>
					{label}
				</LabelStyle>
			) : null}
			<div className='col-12 ps-0 has-validation input-container'>
				<textarea
					className='form-control'
					autoComplete={autoComplete}
					placeholder={placeholder}
					defaultValue={defaultValue}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					ref={ref}
				/>
				{errors?.[name] || errors ? (
					<span className='badge bg-danger px-2  my-2'>{(errors[name] || errors).message}</span>
				) : null}
			</div>
		</TextAreaWrapperStyle>
	)
);

export default TextArea;
