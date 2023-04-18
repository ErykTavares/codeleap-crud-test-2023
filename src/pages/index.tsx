import DefaultLayout from '@/layout/defaultLayout';
import { useSelector } from 'react-redux';
import { ContainerStyle } from './style';

const Home = () => {
	const test = useSelector((state: any) => state);

	console.log(test);

	return (
		<DefaultLayout>
			<ContainerStyle>
				<h2>esta e a home</h2>
			</ContainerStyle>
		</DefaultLayout>
	);
};

export default Home;
