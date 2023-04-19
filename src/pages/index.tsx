import DefaultLayout from '@/layout/defaultLayout';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import nookies from 'nookies';
// import { GetServerSidePropsContext } from 'next/types';
import { ContainerStyle } from './style';

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
// 	const cookies = nookies.get(ctx);

// 	if (cookies.profile) {
// 		const profile = JSON.parse(cookies?.profile || '');
// 		return { props: { profile } };
// 	}
// 	nookies.destroy(null, 'profile');

// 	return {
// 		redirect: {
// 			destination: '/login',
// 			permanence: true
// 		}
// 	};
// }

const Home = () => {
	const userName = useSelector((state: any) => state.userReducer.profile.userName);
	const route = useRouter();

	useEffect(() => {
		// !userName && route.push('/login');
	}, [userName, route]);

	return (
		<DefaultLayout>
			<ContainerStyle>
				<h2>esta e a home</h2>
			</ContainerStyle>
		</DefaultLayout>
	);
};

export default Home;
