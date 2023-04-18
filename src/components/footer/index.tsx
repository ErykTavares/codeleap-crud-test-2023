import React from 'react';
import * as S from './style';

const Footer = (): JSX.Element => (
	<S.FooterStyle>
		<a href='https://eryktavares-portfolio.netlify.app/home' target='_blank' rel='noreferrer'>
			<h6>copyright ErykTavares © {new Date().getFullYear()}</h6>
		</a>
	</S.FooterStyle>
);
export default Footer;
