import Footer from '@/components/footer';
import Form from '@/components/form';
import Button from '@/components/form/button';
import Input from '@/components/form/input';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ContainerStyle, LoginWrapperStyle } from './style';

const Login = (): JSX.Element => {
	const { control, handleSubmit } = useForm();

	const handleSetUserName = (data: { userName: string }) => {
		console.log(data.userName);
	};

	return (
		<>
			<ContainerStyle>
				<LoginWrapperStyle>
					<div className='col-12 ps-2 title-container'>
						<h2>Welcome to CodeLeap network!</h2>
					</div>
					<Form
						className='col-12'
						onSubmit={(e) => handleSubmit((data: any) => handleSetUserName(data))(e)}
					>
						<div className='col-12 row my-2'>
							<Controller
								render={({ field: { name, onChange, value, ref }, fieldState: { error } }) => (
									<Input
										type='text'
										label='Please enter your username'
										errors={error}
										name={name}
										onChange={onChange}
										value={value}
										ref={ref}
									/>
								)}
								name='userName'
								control={control}
								defaultValue=''
							/>
						</div>
						<div className='col-12 d-flex justify-content-end pe-2'>
							<Button type='submit' backgroundColor='blue' color='white'>
								Enter
							</Button>
						</div>
					</Form>
				</LoginWrapperStyle>
			</ContainerStyle>
			<Footer />
		</>
	);
};
export default Login;
