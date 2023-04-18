import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import { LabelStyle } from '../style';
import { InputWrapperStyle } from './styled';

interface IProps {
	type:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	label?: string;
	placeholder?: string;
	autoComplete?: string;
	onChange: ChangeEventHandler<HTMLInputElement> | undefined;
	errors?: any;
	onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
	value?: any;
	name: string;
	accept?: string;
	multiple?: boolean;
	pattern?: string;
	defaultValue?: string | number | string[] | undefined;
	min?: number | string;
	max?: number | string;
}

const Input = React.forwardRef(
	(
		{
			type,
			label,
			placeholder,
			autoComplete,
			onChange,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			errors,
			onBlur,
			name,
			accept,
			multiple,
			pattern,
			defaultValue,
			value,
			min,
			max
		}: IProps,
		ref: React.LegacyRef<HTMLInputElement>
	) => (
		<InputWrapperStyle>
			{label ? (
				<LabelStyle className='col-md-12 col-form-label ps-0' htmlFor={name}>
					{label}
				</LabelStyle>
			) : null}
			<div className='col-12 ps-0 has-validation input-container'>
				<input
					className='form-control'
					type={type}
					autoComplete={autoComplete}
					placeholder={placeholder}
					defaultValue={defaultValue}
					accept={accept}
					multiple={multiple}
					pattern={pattern}
					max={max}
					min={min}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					ref={ref}
				/>
				{errors?.[name] || errors ? (
					<span className='badge bg-danger px-2  my-2'>{(errors[name] || errors).message}</span>
				) : null}
			</div>
		</InputWrapperStyle>
	)
);

export default Input;
