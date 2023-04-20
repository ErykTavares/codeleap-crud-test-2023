import Form from '@/components/form';
import Button from '@/components/form/button';
import Input from '@/components/form/input';
import TextArea from '@/components/form/textArea';
import api from '@/services/api';
import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ContainerStyle, InputsWrapperStyle } from './style';

interface IPostsModalProps {
	postsGet: () => Promise<void>;
}

const CreatePostCard = ({ postsGet }: IPostsModalProps): JSX.Element => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			title: '',
			content: ''
		}
	});

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const postsPost = useCallback(async (): Promise<void> => {
		const formData = new FormData();
		await api
			.post(`/api/`, formData)
			.then(() => {
				postsGet();
			})
			.catch((err) => {
				console.log(err);
			});
	}, [postsGet]);

	return (
		<ContainerStyle>
			<div className='col-12'>
				<h3>What’s on your mind?</h3>
			</div>
			<InputsWrapperStyle>
				<Form
					method='POST'
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(() => {})(e)}
				>
					<div className='col-12 my-2'>
						<Controller
							render={({ field: { name, onChange, value, ref }, fieldState: { error } }) => (
								<Input
									type='text'
									label='Title'
									placeholder='Hello word!'
									errors={error}
									name={name}
									onChange={onChange}
									value={value}
									ref={ref}
								/>
							)}
							name='title'
							control={control}
						/>
					</div>
					<div className='col-12 my-2'>
						<Controller
							render={({ field: { name, onChange, value, ref }, fieldState: { error } }) => (
								<TextArea
									label='Content'
									placeholder='Content here!'
									errors={error}
									name={name}
									onChange={onChange}
									value={value}
									ref={ref}
								/>
							)}
							name='content'
							control={control}
						/>
					</div>
					<div className='col-12 d-flex justify-content-end mt-2'>
						<Button type='submit' backgroundColor='blue' color='#fff'>
							Create
						</Button>
					</div>
				</Form>
			</InputsWrapperStyle>
		</ContainerStyle>
	);
};
export default CreatePostCard;
