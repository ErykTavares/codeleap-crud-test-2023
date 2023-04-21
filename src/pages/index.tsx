import CreatePostCard from '@/components/cards/createPostCard';
import PostCard from '@/components/cards/postCard';
import useLoading from '@/hooks/useLoading';
import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import { Head } from 'next/document';
import { useCallback, useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { ContainerStyle, PostsWrapperStyle } from '../assets/styles/pages/homeStyle';

const Home = () => {
	const [posts, setPosts] = useState<DPost.IPost[]>([]);
	const [offset, setOffset] = useState(0);
	const containerRef = useRef<HTMLScriptElement>(null);

	const { showLoading, hiddenLoading } = useLoading();

	const postsGet = useCallback(async (): Promise<void> => {
		showLoading();

		await api(`/careers/`, {
			params: {
				limit: 10,
				offset
			}
		})
			.then((res) => {
				const { results }: { results: DPost.IPost[] } = res.data;

				if (results.length) {
					const prevFilters = [
						...posts.filter((fil) => !results.includes(fil) && !!offset),
						...results
					];

					setPosts(prevFilters);
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
				setOffset(posts.length);
			}
		}
	}, [setOffset, posts]);

	useEffect(() => {
		postsGet();
	}, [postsGet]);

	return (
		<>
			<Head>
				<title>Codeleap Test - Home</title>
			</Head>
			<DefaultLayout>
				<ContainerStyle onScroll={handleScroll} ref={containerRef}>
					<CreatePostCard postsGet={postsGet} setOffset={setOffset} />
					<PostsWrapperStyle>
						{posts?.map((item) => (
							<PostCard
								key={crypto.randomUUID()}
								post={item}
								postsGet={postsGet}
								setOffset={setOffset}
							/>
						))}
					</PostsWrapperStyle>
				</ContainerStyle>
			</DefaultLayout>
		</>
	);
};

export default Home;
