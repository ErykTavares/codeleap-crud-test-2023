import Form from '@/components/form';
import Button from '@/components/form/button';
import Input from '@/components/form/input';
import TextArea from '@/components/form/textArea';
import api from '@/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import useLoading from '@/hooks/useLoading';
import { ContainerStyle, InputsWrapperStyle } from './style';

interface IPostsModalProps {
	postsGet: () => Promise<void>;
	setOffset: Dispatch<SetStateAction<number>>;
}

export const postSchema = yup.object().shape({
	title: yup.string(),
	content: yup.string()
});

const CreatePostCard = ({ postsGet, setOffset }: IPostsModalProps): JSX.Element => {
	const userName = useSelector((state: any) => state.userReducer.profile.userName);
	const {
		control,
		handleSubmit,
		formState: { isDirty }
	} = useForm({
		defaultValues: {
			title: '',
			content: ''
		},
		mode: 'onSubmit',
		resolver: yupResolver(postSchema)
	});
	const { showLoading, hiddenLoading } = useLoading();

	const postsPost = useCallback(
		async (data: { title: string; content: string }): Promise<void> => {
			const formData = new FormData();

			formData.append('username', userName);
			formData.append('title', data.title);
			formData.append('content', data.content);

			showLoading();
			await api
				.post(`/careers/`, formData)
				.then(() => {
					Swal.fire({
						title: 'Success',
						text: 'New Post Create Successfully.',
						icon: 'success',
						confirmButtonText: 'ok',
						confirmButtonColor: 'green',
						preConfirm: async (): Promise<void> => {
							setOffset(0);
							postsGet();
						}
					});
				})
				.catch((err) => {
					Swal.fire({
						title: 'Error',
						text: err?.response?.data?.message || 'Something went wrong',
						icon: 'error',
						confirmButtonText: 'ok',
						confirmButtonColor: 'red'
					});
				});
			hiddenLoading();
		},
		[postsGet, userName]
	);

	return (
		<ContainerStyle>
			<div className='col-12'>
				<h3>What’s on your mind?</h3>
			</div>
			<InputsWrapperStyle>
				<Form
					method='POST'
					onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
						handleSubmit((data) => postsPost(data))(e)
					}
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
						<Button type='submit' backgroundColor='blue' color='#fff' disabled={!isDirty}>
							Create
						</Button>
					</div>
				</Form>
			</InputsWrapperStyle>
		</ContainerStyle>
	);
};
export default CreatePostCard;
