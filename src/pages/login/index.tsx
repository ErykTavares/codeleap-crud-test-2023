import Footer from '@/components/footer';
import Form from '@/components/form';
import Button from '@/components/form/button';
import Input from '@/components/form/input';
import { store } from '@/store';
import { userActions } from '@/store/slices/authSlice';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import theme from '@/assets/styles/theme';
import Head from 'next/head';
import { ContainerStyle, LoginWrapperStyle } from '../../assets/styles/pages/loginStyle';

export async function getStaticProps() {
	return {
		props: { test: 'text' }
	};
}

const loginSchema = yup.object().shape({
	userName: yup
		.string()
		.min(5, 'User Name must be at least 5 characters long')
		.required('User Name is required')
});

const colorList = Object.keys(theme.colors);

const Login = (): JSX.Element => {
	const {
		control,
		handleSubmit,
		formState: { isDirty }
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			userName: ''
		},
		resolver: yupResolver(loginSchema)
	});

	const { push } = useRouter();

	const handleSetUserName = (data: { userName: string }): void => {
		const profile = {
			userName: data.userName,
			profileColor: colorList[Math.floor(Math.random() * colorList.length)]
		};
		store.dispatch(
			userActions.setUserName({
				profile,
				auth: {}
			})
		);
		push('/');
	};

	return (
		<>
			<Head>
				<title>CodeLeap-Login</title>
			</Head>
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
										placeholder='user01'
										errors={error}
										name={name}
										onChange={onChange}
										value={value}
										ref={ref}
									/>
								)}
								name='userName'
								control={control}
							/>
						</div>
						<div className='col-12 d-flex justify-content-end pe-2 mt-2'>
							<Button type='submit' backgroundColor='blue' color='white' disabled={!isDirty}>
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
