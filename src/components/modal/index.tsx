import React, { useEffect } from 'react';
import { ModalStyle, WrapperStyle } from './style';

interface IModalProps {
	children: JSX.Element;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, show, setShow }: IModalProps): JSX.Element => {
	const handleKeyDown = (e: KeyboardEvent): void => {
		e.key === 'Escape' && setShow(!show);
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<ModalStyle
			onClick={() => setShow(!show)}
			onKeyDown={(event) => {
				event.key === 'Escape' && setShow(!show);
			}}
			tabIndex={0}
		>
			<WrapperStyle autoFocus onClick={(e) => e.stopPropagation()}>
				{children}
			</WrapperStyle>
		</ModalStyle>
	);
};
export default Modal;
