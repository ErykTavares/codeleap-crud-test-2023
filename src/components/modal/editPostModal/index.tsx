import { postSchema } from '@/components/cards/createPostCard';
import Form from '@/components/form';
import Button from '@/components/form/button';
import Input from '@/components/form/input';
import TextArea from '@/components/form/textArea';
import useLoading from '@/hooks/useLoading';
import api from '@/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Modal from '..';

interface IEditPostModalProps {
	post: DPost.IPost;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	postsGet: () => Promise<void>;
	setOffset?: Dispatch<SetStateAction<number>>;
}

const EditPostModal = ({
	post,
	show,
	setShow,
	postsGet,
	setOffset
}: IEditPostModalProps): JSX.Element => {
	const modalRef = useRef<HTMLDivElement>(null);

	const { control, handleSubmit } = useForm({
		defaultValues: {
			title: post.title,
			content: post.content
		},
		mode: 'onSubmit',
		resolver: yupResolver(postSchema)
	});
	const { showLoading, hiddenLoading } = useLoading();

	const postPatch = useCallback(async (data: { title: string; content: string }): Promise<void> => {
		const formData = new FormData();

		formData.append('title', data.title);
		formData.append('content', data.content);

		showLoading();
		await api
			.patch(`/careers/${post.id}/`, formData)
			.then(() => {
				Swal.fire({
					title: 'Success',
					text: 'New Post Create Successfully.',
					icon: 'success',
					confirmButtonText: 'ok',
					confirmButtonColor: 'green',
					preConfirm: async (): Promise<void> => {
						setOffset && setOffset(0);
						postsGet();
						if (modalRef.current) modalRef.current.click();
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
	}, []);

	return (
		<Modal ref={modalRef} title='Edit Modal' show={show} setShow={setShow}>
			<Form
				method='POST'
				onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
					handleSubmit((data) => postPatch(data))(e)
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
				<div className='col-12 d-flex justify-content-end mt-2 pe-2'>
					<Button
						className='me-3'
						onClick={() => {
							if (modalRef.current) modalRef.current.click();
						}}
					>
						Cancel
					</Button>
					<Button type='submit' backgroundColor='green' color='#fff'>
						Save
					</Button>
				</div>
			</Form>
		</Modal>
	);
};
export default EditPostModal;
