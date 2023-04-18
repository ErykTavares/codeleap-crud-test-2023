import React from 'react';
import { ModalStyle } from './style';

interface IModalProps {
	children: JSX.Element;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, show, setShow }: IModalProps): JSX.Element => (
	<ModalStyle onKeyDown={(event) => (event.key === 'Escape' ? setShow(!show) : null)}>
		{children}
	</ModalStyle>
);
export default Modal;
