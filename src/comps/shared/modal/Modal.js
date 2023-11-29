/* eslint-disable */
import React from "react";
import { ModalContainer } from "./modal.styled";
import { useRecoilState } from "recoil";

//: states
import { modalState } from "../store/states";

//: comps
import { ChangePassword } from "../../auth/changePwd/ChangePassword";

export const Modal = () => {
	const [modal, setModal] = useRecoilState(modalState);

	const handleCloseBtnCick = (e) => {
    setModal(false)
	};

	return (
		<ModalContainer id='modal' className="animate__animated animate__fadeIn">
			<span className='closeBtn' onClick={handleCloseBtnCick}>
				✖︎
			</span>
			<ChangePassword />
		</ModalContainer>
	);
};
