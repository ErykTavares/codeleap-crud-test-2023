import { ContainerStyle, PostsWrapperStyle } from '@/assets/styles/pages/homeStyle';
import PostCard from '@/components/cards/postCard';
import useLoading from '@/hooks/useLoading';
import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Profile = (): JSX.Element => {
	const [usePosts, setUserPosts] = useState<DPost.IPost[]>([]);

	const { showLoading, hiddenLoading } = useLoading();
	const { userName } = useSelector((state: any) => state?.userReducer?.profile);

	const userPostsGet = useCallback(async (): Promise<void> => {
		showLoading();

		await api(`/careers/`, {
			params: {
				limit: 100,
				username: userName
			}
		})
			.then((res) => {
				const { results }: { results: DPost.IPost[] } = res.data;

				setUserPosts(results);
			})
			.catch((err) => {
				Swal.fire(err?.response?.data?.message || 'Something went wrong', '', 'error');
			});
		hiddenLoading();
	}, [userName]);

	useEffect(() => {
		userPostsGet();
	}, [userPostsGet]);

	return (
		<DefaultLayout>
			<ContainerStyle>
				<PostsWrapperStyle>
					{usePosts.length ? (
						usePosts.map((item) => (
							<PostCard key={crypto.randomUUID()} post={item} postsGet={userPostsGet} />
						))
					) : (
						<h5>you have no posts</h5>
					)}
				</PostsWrapperStyle>
			</ContainerStyle>
		</DefaultLayout>
	);
};
export default Profile;
