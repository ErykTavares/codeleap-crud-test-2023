import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ContainerStyle } from './style';

const Home = () => {
	const [posts, setPosts] = useState<DPosts.IPosts[]>();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const userName = useSelector((state: any) => state.userReducer.profile.userName);

	const postGet = useCallback(async (): Promise<void> => {
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
		postGet();
	}, [postGet]);

	return (
		<DefaultLayout>
			<ContainerStyle>
				<h2>esta e a home</h2>
			</ContainerStyle>
		</DefaultLayout>
	);
};

export default Home;
