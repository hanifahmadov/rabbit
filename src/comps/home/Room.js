import React from "react";
import apiUrl from "../../apis/apiUrl";
import { RoomContainer } from "./Styled";

export const Room = ({ room, setCurrentRoom }) => {
	// console.log(room)
	return (
		<RoomContainer
			onClick={() => {
				setCurrentRoom(room);
			}}
		>
			<section className='icon'>
				<img src={apiUrl + "/" + room.icon} alt='' />
			</section>
			<section className='name'>
				<span>
					{room.name.length > 7
						? (
								room.name[0].toUpperCase() + room.name.slice(1)
						  ).slice(0, 5) + "..."
						: room.name[0].toUpperCase() + room.name.slice(1)}
				</span>
			</section>
		</RoomContainer>
	);
};

// (room.name[0].toUpperCase() + room.name.slice(1)).slice(0, 8)
