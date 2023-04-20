import { formatDistance } from 'date-fns';
import React, { ReactNode, RefObject } from 'react';
import { useSelector } from 'react-redux';
import Edit from 'src/assets/svg/edit.svg';
import Trash from 'src/assets/svg/trash.svg';
import { ContainerStyle, PostHeaderStyle } from './style';

interface IPostCardProps {
	post: DPost.IPost;
}

const PostCard = React.forwardRef<(node: ReactNode) => void, IPostCardProps>(
	({ post }, ref): JSX.Element => {
		const userName = useSelector((state: any) => state.userReducer.profile.userName);
		const postdate = formatDistance(new Date(post.created_datetime), new Date(), {
			addSuffix: true
		});

		return (
			<ContainerStyle ref={ref as unknown as RefObject<HTMLDivElement>}>
				<PostHeaderStyle>
					<h2>{post.title}</h2>
					{post.username === userName && (
						<ul>
							<li className='trash'>
								<Trash />
							</li>
							<li>
								<Edit />
							</li>
						</ul>
					)}
				</PostHeaderStyle>
				<div className='title'>
					<h4>@{post.username}</h4>
					<h4>{postdate}</h4>
				</div>
				<div className='content'>
					<p>{post.content}</p>
				</div>
			</ContainerStyle>
		);
	}
);

export default PostCard;
