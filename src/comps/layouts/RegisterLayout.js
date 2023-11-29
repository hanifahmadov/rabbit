/* eslint-disable */
import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import 'animate.css';

//: styles
import { RegisterLayoutContainer } from "./Styled";

export const RegisterLayout = () => {
	// let [modal, setModal] = useRecoilState(modalState);
	// console.log("modal::", modal);

	return (
		<RegisterLayoutContainer>
			<section className='outlets'>
				<Outlet />
			</section>

			{/* {modal && <div id='backdrop' className="animate__animated animate__fadeIn" />}
			{modal && <Modal />} */}
		</RegisterLayoutContainer>
	);
};
