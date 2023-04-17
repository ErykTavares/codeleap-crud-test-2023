import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';

interface IDefaultProps {
	children: JSX.Element;
}

const DefaultLayout = ({ children }: IDefaultProps): JSX.Element => (
	<main>
		<Header />
		{children}
		<Footer />
	</main>
);
export default DefaultLayout;
