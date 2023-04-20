import CreatePostCard from '@/components/cards/createPostCard';
import PostCard from '@/components/cards/postCard';
import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import { useCallback, useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
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
				const prevFilters = [
					...posts.filter((fil) => !results.includes(fil) && !!offset),
					...results
				];

				setPosts(prevFilters);
				if (count === posts.length) {
					setInfinite(false);
				}
			})
			.catch((err) => {
				Swal.fire(err?.response?.data?.message || 'Something went wrong', '', 'error');
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
				<CreatePostCard postsGet={postsGet} setOffset={setOffset} />
				<PostsWrapperStyle>
					{posts?.map((item) => (
						<PostCard key={crypto.randomUUID()} post={item} />
					))}
				</PostsWrapperStyle>
			</ContainerStyle>
		</DefaultLayout>
	);
};

export default Home;
