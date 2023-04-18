import React from 'react';
import { FooterStyle } from './style';

const Footer = (): JSX.Element => (
	<FooterStyle>
		<a href='https://eryktavares-portfolio.netlify.app/home' target='_blank' rel='noreferrer'>
			<h6>copyright ErykTavares © {new Date().getFullYear()}</h6>
		</a>
	</FooterStyle>
);
export default Footer;
