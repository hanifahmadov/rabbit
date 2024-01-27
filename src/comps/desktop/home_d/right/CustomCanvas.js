/* eslint-disable */
/* NPM Packages */
import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import OutsideClickHandler from "react-outside-click-handler";

/* STYLED & STATE & API & VARIANTS */
import { CustomCanvasSection } from "../styled/custom_canvas.styled";
import { desktopCanvasVariant } from "../../../home/homeStore/variants";
import {
	displayCreateRoomState,
	displayRoomInfoState,
	displayState,
} from "../../../home/homeStore/states";

/* SUBS */
import { CreateRoom } from "../left/CreateRoom";
import { RoomDetails } from "../left/RoomDetails";

export const CustomCanvas = () => {
	const [display, setDisplay] = useRecoilState(displayState);
	const displayRoomInfo = useRecoilValue(displayRoomInfoState);
	const displayCreateRoom = useRecoilValue(displayCreateRoomState);

	const handleOnOutsideClick = (e) => {
		const val = e.target.className;

		if (
			display &&
			val !== "plus" &&
			val !== "createRoom" &&
			val !== "src" &&
			val !== "roomDetails" &&
			!val.includes('slick')
		) {
			setDisplay(false);
		}
	};

	return (
		<OutsideClickHandler onOutsideClick={handleOnOutsideClick}>
			<CustomCanvasSection
				variants={desktopCanvasVariant}
				initial='initial'
				animate={display ? "animate" : "exit"}
			>
				{displayCreateRoom && <CreateRoom />}
				{displayRoomInfo && <RoomDetails />}
			</CustomCanvasSection>
		</OutsideClickHandler>
	);
};
