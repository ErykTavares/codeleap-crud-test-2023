import EditPostModal from '@/components/modal/editPostModal';
import api from '@/services/api';
import { formatDistance } from 'date-fns';
import React, {
	Dispatch,
	ReactNode,
	RefObject,
	SetStateAction,
	useCallback,
	useState
} from 'react';
import { useSelector } from 'react-redux';
import Edit from 'src/assets/svg/edit.svg';
import Trash from 'src/assets/svg/trash.svg';
import Swal from 'sweetalert2';
import { ContainerStyle, PostHeaderStyle } from './style';

interface IPostCardProps {
	post: DPost.IPost;
	postsGet: () => Promise<void>;
	setOffset: Dispatch<SetStateAction<number>>;
}

const PostCard = React.forwardRef<(node: ReactNode) => void, IPostCardProps>(
	({ post, postsGet, setOffset }, ref): JSX.Element => {
		const [showEditModal, setShowEditModal] = useState(false);

		const userName = useSelector((state: any) => state.userReducer.profile.userName);
		const postdate = formatDistance(new Date(post.created_datetime), new Date(), {
			addSuffix: true
		});

		const postDelete = useCallback(async (): Promise<void> => {
			Swal.fire({
				title: 'Are you sure want to delete this item?',
				customClass: {
					title: 'delete-title',
					actions: 'delete-actions',
					denyButton: 'delete-btn-cancel',
					confirmButton: 'delete-btn-confirm'
				},
				showDenyButton: true,
				confirmButtonText: 'Delete',
				denyButtonText: 'Cancel',
				preConfirm: async (): Promise<void> => {
					await api
						.delete(`/careers/${post.id}/`)
						.then(async () => {
							await Swal.fire(`Post:  ${post.id} Title : ${post.title} deleted.`, '', 'success');
						})
						.catch((err) => {
							Swal.fire(err?.response?.data?.message || 'Something went wrong', '', 'error');
						});
					setOffset(0);
					postsGet();
				}
			});
		}, []);

		return (
			<ContainerStyle ref={ref as unknown as RefObject<HTMLDivElement>}>
				<PostHeaderStyle>
					<h2>{post.title}</h2>
					{post.username === userName ? (
						<ul>
							<li className='trash'>
								<Trash onClick={postDelete} />
							</li>
							<li>
								<Edit
									onClick={() => {
										setShowEditModal(!showEditModal);
									}}
								/>
							</li>
						</ul>
					) : null}
				</PostHeaderStyle>
				<div className='title'>
					<h4>@{post.username}</h4>
					<h4>{postdate}</h4>
				</div>
				<div className='content'>
					<p>{post.content}</p>
				</div>
				{showEditModal ? (
					<EditPostModal
						post={post}
						show={showEditModal}
						setShow={setShowEditModal}
						postsGet={postsGet}
						setOffset={setOffset}
					/>
				) : null}
			</ContainerStyle>
		);
	}
);

export default PostCard;
