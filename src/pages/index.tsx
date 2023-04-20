import CreatePostCard from '@/components/cards/createPostCard';
import PostCard from '@/components/cards/postCard';
import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ContainerStyle, PostsWrapperStyle } from './style';

const Home = () => {
	const [posts, setPosts] = useState<DPost.IPost[]>([]);
	const [offset, setOffset] = useState(0);
	const [infinite, setInfinite] = useState(true);
	const containerRef = useRef<HTMLScriptElement>(null);

	const postsGet = useCallback(async (): Promise<void> => {
		await api(`/careers/`, {
			params: {
				limit: 10,
				offset
			}
		})
			.then((res) => {
				const { results, count }: { results: DPost.IPost[]; count: number } = res.data;
				const prevFilters = [...posts.filter((fil) => !results.includes(fil)), ...results];

				setPosts(prevFilters);
				if (count === posts.length) {
					setInfinite(false);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [offset]);

	const handleScroll = useCallback(() => {
		if (containerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
			if (scrollTop + clientHeight === scrollHeight && infinite) {
				setOffset(posts.length);
			}
		}
	}, [infinite, setOffset, posts]);

	useEffect(() => {
		postsGet();
	}, [postsGet]);

	return (
		<DefaultLayout>
			<ContainerStyle onScroll={handleScroll} ref={containerRef}>
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
