import React, { useEffect, useState } from 'react';
import { ModalStyle, WrapperStyle } from './style';

interface IModalProps {
	title: string;
	children: JSX.Element;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = React.forwardRef<HTMLDivElement, IModalProps>(
	({ children, title, show, setShow }, ref): JSX.Element => {
		const [animation, setAnimation] = useState('pop-modal');

		const handleCloseModal = (): void => {
			setAnimation('unpop-modal');
			setTimeout(() => {
				setShow(false);
			}, 500);
		};

		const handleKeyDown = (e: KeyboardEvent): void => {
			e.key === 'Escape' && handleCloseModal();
		};

		useEffect(() => {
			document.addEventListener('keydown', handleKeyDown);
			return () => document.removeEventListener('keydown', handleKeyDown);
		}, []);

		return (
			<ModalStyle
				ref={ref}
				onClick={() => handleCloseModal()}
				onKeyDown={(event) => {
					event.key === 'Escape' && setShow(!show);
				}}
				tabIndex={0}
			>
				<WrapperStyle className={animation} autoFocus onClick={(e) => e.stopPropagation()}>
					<div className='col-12 ms-3 modal-title-container'>
						<h3>{title}</h3>
					</div>
					{children}
				</WrapperStyle>
			</ModalStyle>
		);
	}
);
export default Modal;
