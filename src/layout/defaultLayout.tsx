import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useSelector } from 'react-redux';
import Loading from '@/components/loading';

interface IDefaultProps {
	children: JSX.Element;
}

const DefaultLayout = ({ children }: IDefaultProps): JSX.Element => {
	const loading = useSelector((state: any) => state.loadingReducer.loading);

	return (
		<main>
			<Header />
			{children}
			<Footer />
			{loading ? <Loading /> : null}
		</main>
	);
};
export default DefaultLayout;
