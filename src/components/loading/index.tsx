import React from 'react';
import { LoadingWrapperStyle } from './style';

const Loading = (): JSX.Element => (
	<LoadingWrapperStyle>
		<div className='lds-roller'>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	</LoadingWrapperStyle>
);
export default Loading;
