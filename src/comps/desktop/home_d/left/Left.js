/* eslint-disable */
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

/* STYLED & APIs & STATE */
import info from "../../../home/homeStore/logo/info1.png";
import { LeftSection, CreateDetailsAccount } from "../styled/left.styled";
import {
	curRoomState,
	displayCreateRoomState,
	displayRoomInfoState,
	displayState,
	roomsState,
} from "../../../home/homeStore/states";

/* SUBS */
import { Room } from "./Room";
import { Account } from "../../../auth/account/Account";

export const Left = ({}) => {
	const [curRoom, setCurRoom] = useRecoilState(curRoomState);
	const [rooms, setRooms] = useRecoilState(roomsState);

	const [display, setDisplay] = useRecoilState(displayState);
	const [displayRoomInfo, setDisplayRoomInfo] =
		useRecoilState(displayRoomInfoState);
	const [displayCreateRoom, setDisplayCreateRoom] = useRecoilState(
		displayCreateRoomState
	);

	const handleCreateRoomClick = () => {
		if (!display) {
			setDisplay(true);
			setDisplayCreateRoom(true);
			setDisplayRoomInfo(false);
		} else {
			if (displayCreateRoom) {
				setDisplay(false);
			} else {
				setDisplayRoomInfo(false);
				setDisplayCreateRoom(true);
			}
		}
	};

	const handleRoomDetailsClick = () => {
		if (!display) {
			setDisplay(true);
			setDisplayRoomInfo(true);
			setDisplayCreateRoom(false);
		} else {
			if (displayRoomInfo) {
				setDisplay(false);
			} else {
				setDisplayRoomInfo(true);
				setDisplayCreateRoom(false);
			}
		}
	};

	return (
		<LeftSection>
			<section className='roomTitle'>Rooms</section>

			<section className='rooms'>
				{rooms.map((room, index) => (
					<Room
						key={index}
						room={room}
						curRoom={curRoom}
						setCurRoom={setCurRoom}
					/>
				))}
			</section>

			<CreateDetailsAccount>
				<div className='createRoom' onClick={handleCreateRoomClick}>
					<span className="plus">+</span>
				</div>
				<div className='roomDetails' onClick={handleRoomDetailsClick}>
					<span className="i">
						<img src={info}  className="src"/>
					</span>
				</div>

				<div className='userAccount'>
					<Account />
				</div>
			</CreateDetailsAccount>
		</LeftSection>
	);
};

/* 

	variants={
					display
						? roomSettingMobileVariants
						: roomSettingDesktopVariants
				}
				initial='initial'
				animate={display ? "animate" : "exit"}



					<motion.section className='currentRoomDetailsSection'>
				{displayRoomInfo && currentRoom.name && (
					<RoomDetails
						currentRoom={currentRoom}
						setDisplay={setDisplay}
						set
					/>
				)}

				{displayCreateRoom && (
					<CreateRoom user={user} setDisplay={setDisplay} />
				)}
			</motion.section>

*/
