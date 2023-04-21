import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Chevron from 'src/assets/svg/chevron-down.svg';
import Link from 'next/link';
import { Person, Power } from 'react-bootstrap-icons';
import { store } from '@/store';
import { userActions } from '@/store/slices/authSlice';
import { useRouter } from 'next/router';
import {
	ProfileDropdownStyle,
	ProfileImgStyle,
	ProfileNavStyle,
	ProfileWrapperStyle
} from './style';

const ProfileMenu = (): JSX.Element => {
	const [dropDown, setDropDown] = useState(false);

	const { userName, profileColor } = useSelector((state: any) => state.userReducer.profile);
	const { push } = useRouter();

	const handleLogout = (): void => {
		const profile = {
			userName: '',
			profileColor: ''
		};
		store.dispatch(
			userActions.setUserName({
				profile,
				auth: {}
			})
		);
		push('/login');
	};

	return (
		<ProfileWrapperStyle
			onClick={() => {
				setDropDown(!dropDown);
			}}
		>
			<ProfileImgStyle color={profileColor}>{userName.at(0)}</ProfileImgStyle>
			<ProfileDropdownStyle>
				<p className='mb-0' translate='no'>
					{userName}
				</p>
				<Chevron className='chevron-svg ms-2' />
			</ProfileDropdownStyle>
			{dropDown ? (
				<ProfileNavStyle>
					<ul>
						<li>
							<Person />
							<Link href='/profile'>Profile</Link>
						</li>
						<li className='text-danger' onClick={handleLogout}>
							<Power />
							Logout
						</li>
					</ul>
				</ProfileNavStyle>
			) : null}
		</ProfileWrapperStyle>
	);
};
export default ProfileMenu;
