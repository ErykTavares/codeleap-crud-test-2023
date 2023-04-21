import Link from 'next/dist/client/link';
import React from 'react';
import ProfileMenu from './profileMenu';
import { HeaderStyle } from './style';

const Header = (): JSX.Element => (
	<HeaderStyle>
		<Link href='/'>
			<h1 className='mb-0' translate='no'>
				CodeLeap Network
			</h1>
		</Link>

		<ProfileMenu />
	</HeaderStyle>
);
export default Header;
