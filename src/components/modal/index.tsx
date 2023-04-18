import React from 'react';
import * as S from './style';

interface IModalProps {
	children: JSX.Element;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, show, setShow }: IModalProps): JSX.Element => (
	<S.ModalStyle onKeyDown={(event) => (event.key === 'Escape' ? setShow(!show) : null)}>
		{children}
	</S.ModalStyle>
);
export default Modal;
