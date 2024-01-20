import React from "react";
import apiUrl from "../../../apis/apiUrl";
import { RoomSection } from "./styled/room.styled";

export const Room = ({ room, curRoom, setCurRoom }) => {
	const active = room._id === curRoom._id;

	return (
		<RoomSection
			$active={active}
			onClick={() => setCurRoom(room)}
		>
			<section className='icon'>
				<img src={apiUrl + "/" + room.icon} alt='logo' />
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
		</RoomSection>
	);
};


