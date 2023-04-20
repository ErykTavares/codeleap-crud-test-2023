import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderStyle } from './style';

const Header = (): JSX.Element => {
	const userName = useSelector((state: any) => state.userReducer.profile.userName);

	return (
		<HeaderStyle>
			<h1 className='mb-0'>CodeLeap Network</h1>

			<h2 className='mb-0'>{userName}</h2>
		</HeaderStyle>
	);
};
export default Header;
