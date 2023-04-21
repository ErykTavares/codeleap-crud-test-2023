import PostCard from '@/components/cards/postCard';
import useLoading from '@/hooks/useLoading';
import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { ContainerStyle, PostsWrapperStyle } from './style';

const Profile = (): JSX.Element => {
	const [usePosts, setUserPosts] = useState<DPost.IPost[]>([]);
	const [offset, setOffset] = useState(0);
	const containerRef = useRef<HTMLScriptElement>(null);

	const { showLoading, hiddenLoading } = useLoading();
	const { userName } = useSelector((state: any) => state.userReducer.profile);

	const userPostsGet = useCallback(async (): Promise<void> => {
		showLoading();

		await api(`/careers/`, {
			params: {
				limit: 10,
				offset,
				username: userName
			}
		})
			.then((res) => {
				const { results }: { results: DPost.IPost[] } = res.data;

				if (results.length) {
					const prevFilters = [
						...usePosts.filter((fil) => !results.includes(fil) && !!offset),
						...results
					];

					setUserPosts(prevFilters);
				}
			})
			.catch((err) => {
				Swal.fire(err?.response?.data?.message || 'Something went wrong', '', 'error');
			});
		hiddenLoading();
	}, [offset]);

	const handleScroll = useCallback(() => {
		if (containerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
			if (scrollTop + clientHeight === scrollHeight) {
				setOffset(usePosts.length);
			}
		}
	}, [setOffset, usePosts]);

	useEffect(() => {
		userPostsGet();
	}, [userPostsGet]);

	return (
		<DefaultLayout>
			<ContainerStyle onScroll={handleScroll} ref={containerRef}>
				<PostsWrapperStyle>
					{usePosts?.map((item) => (
						<PostCard
							key={crypto.randomUUID()}
							post={item}
							postsGet={userPostsGet}
							setOffset={setOffset}
						/>
					))}
				</PostsWrapperStyle>
			</ContainerStyle>
		</DefaultLayout>
	);
};
export default Profile;
