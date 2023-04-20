import CreatePostCard from '@/components/cards/createPostCard';
import PostCard from '@/components/cards/postCard';
import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ContainerStyle, PostsWrapperStyle } from './style';

const Home = () => {
	const [posts, setPosts] = useState<DPost.IPost[]>();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const userName = useSelector((state: any) => state.userReducer.profile.userName);

	const postsGet = useCallback(async (): Promise<void> => {
		await api(`/careers/`)
			.then((res) => {
				const results = res.data.results;
				setPosts(results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		postsGet();
	}, [postsGet]);

	return (
		<DefaultLayout>
			<ContainerStyle>
				<CreatePostCard postsGet={postsGet} />
				<PostsWrapperStyle>
					{posts?.map((item) => (
						<PostCard key={item.id} post={item} />
					))}
				</PostsWrapperStyle>
			</ContainerStyle>
		</DefaultLayout>
	);
};

export default Home;
