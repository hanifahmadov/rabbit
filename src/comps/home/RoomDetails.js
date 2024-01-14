/* eslint-disable */
import React, { useState, useRef } from "react";
import { RoomDetailsContainer } from "./Styled";
import apiUrl from "../../apis/apiUrl";
import {
	format,
	formatDistanceToNow,
	formatDistanceToNowStrict,
	subDays,
	subMonths,
} from "date-fns";

export const RoomDetails = ({ currentRoom }) => {



	// ROOM CREATED AT
	const currentDate = new Date(currentRoom?.createdAt.replace(/^(\d{4}-\d{2}-\d{2}).*/, "$1"));
	const MonthsBefore = subMonths(currentDate, 0);
	const formattedCreatedAt = format(MonthsBefore, "yyyy MMM dd");

	const [filename, setFilename] = useState("");
	const [file, setFile] = useState(undefined);
	const fileRef = useRef();

	const handleUpdateRoomIconForm = (e) => {
		e.preventDefault();
		let data = new FormData();
		data.append("avatars", file);

		// axios
		// 	.post("http://localhost:3040/room_avatars", data, {
		// 		headers: {
		// 			accept: "application/json",
		// 			"Accept-Language": "en-US,en;q=0.8",
		// 			"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
		// 			Authorization: `Bearer ${user.accessToken}`,
		// 		},
		// 	})
		// 	.then((response) => {
		// 		//handle success
		// 		const { imgTitle } = response.data;
		// 		console.log("new img created and title received: ", imgTitle);

		// 		console.log("room name", newRoomNameRef.current.value);

		// 		window.socket.emit("create_room", {
		// 			roomName: newRoomNameRef.current.value,
		// 			roomIconTitle: imgTitle
		// 				? imgTitle
		// 				: "default_" + Math.floor(Math.random() * 9) + ".jpeg",
		// 			roomOwner: user._id,
		// 		});

		// 		newRoomNameRef.current.value = "";
		// 		setDisplay(false);
		// 		setFilename(text);
		// 		setFile();
		// 	})
		// 	.catch((error) => {
		// 		//handle error
		// 		console.log("create newroom avatars error");
		// 	});
	};

	const handleFileInputChange = () => {
		const [file] = fileRef.current?.files;
		const filename = file ? file?.name.substring(0, 15) : "";

		setFilename(filename);
		setFile(file);
	};

	return (
		<RoomDetailsContainer>
			<div className='room_header'>
				Room{" "}
				{currentRoom.name &&
					currentRoom.name[0].toUpperCase() +
						currentRoom.name.slice(1)}
			</div>

			<div className='room_details'>
				<div className='room_icon'>
					<img src={apiUrl + "/" + currentRoom.icon} alt='' />

					<form
						onSubmit={handleUpdateRoomIconForm}
						encType='multipart/form-data'
					>
						<input
							type='file'
							id='files'
							name='avatar'
							className='d-none'
							ref={fileRef}
							accept='image/png, image/jpeg, image/jpg'
							onChange={handleFileInputChange}
						/>
						<button disabled={true}> change icon</button>

					</form>
				</div>

				<div className='room_detail_header'>Details</div>

				<div className='room_detail_content'>
					<div className='users_count'>
						<span className='text'>Users</span>
						<span className='count'>
							[ {currentRoom.users.length} ]
						</span>
					</div>

					<div className='created_by'>
						<span className='text'>Created by</span>
						<span className='owner_name'>
							{currentRoom.owner
								? currentRoom.owner.email
								: "System"}
						</span>
					</div>

					<div className='created_at'>
						<span className='text'>Created at</span>
						<span className='format_time_ago'>
							{formattedCreatedAt}
						</span>
					</div>
				</div>
			</div>

			<div className='room_users'>
				<div className='header'>Users</div>

				{currentRoom.users &&
					currentRoom?.users.map((user) => (
						<div key={user._id} className='user'>
							<div className='user_img'>
								<img
									src={apiUrl + "/" + user.avatar}
									alt='user_avatar'
								/>
							</div>
							<div className='user_details'>
								<span className='username'>
									{user.email.split("@")[0]}
								</span>
								<span className='joined'>joined</span>
								<span className='time_ago'>
									{formatDistanceToNowStrict(
										subDays(new Date(user.createdAt), 0),
										{
											addSuffix: true,
										}
									)}
								</span>
							</div>
						</div>
					))}
			</div>

			<div className="update_roomDetails">
				<button disabled>Update</button>
			</div>
		</RoomDetailsContainer>
	);
};
