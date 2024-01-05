/* eslint-disable */
import React, { useState, useEffect } from "react";
import { JoinRoomSection } from "./styled/joinRoom.styled";
import info from "../shared/logos/external/information_9195785.png";
import { produce } from "immer";
import { useRecoilState } from "recoil";
import { roomsDefault } from "../shared/store/states";

export const JoinRoom = ({ backdrop, currentRoom, setCurrentRoom, user }) => {
	const [joinroom, setJoinroom] = useState(false);
	const [rooms, setRooms] = useRecoilState(roomsDefault);

	const handleJoinroomClick = () => {
		window.socket.emit("joinroom", {
			roomId: currentRoom._id,
			userId: user._id,
		});

		setJoinroom(true);
	};

	useEffect(() => {
		window?.socket?.on("joinroom", (response) => {
			const { rooms } = response;
			// console.log('33: JoinRoom.js useEffect response -> rooms', rooms)
			setRooms(rooms);
		});

		return () => {
			console.log("use effect clear functions");
			window?.socket?.removeAllListeners("joinroom");
		};
	}, [joinroom]);

	return (
		<JoinRoomSection $backdrop={backdrop}>
			<div className='joinroom'>
				<span className='span_header'>
					{currentRoom?.name?.toUpperCase()}
				</span>
				<span className='span_body'>
					<span className='span_membersOnly'>MEMBERS ONLY</span>

					<span className='span_requesText'>
						{/* Request to join the owner. */}
						Join the room to access the content.
					</span>

					<span className='span_requestButton'>
						<button
							type='button'
							className='btn btn-primary'
							onClick={handleJoinroomClick}
						>
							Join Room
						</button>
					</span>
				</span>
			</div>
		</JoinRoomSection>
	);
};
