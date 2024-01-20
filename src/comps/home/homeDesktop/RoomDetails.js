/* eslint-disable */
/* NPM Packages */
import React, { useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormData from "form-data";
import {
	format,
	formatDistanceToNow,
	formatDistanceToNowStrict,
	subDays,
	subMonths,
} from "date-fns";

/* STATES & STYLED & API  */
import apiUrl from "../../../apis/apiUrl";
import { RoomDetailsSection, AvatarUpdate, CurrentRoomDetails, CurrentRoomUsers } from "./styled/room_details.styled";
import { curRoomState } from "../homeStore/states";

/* SUBS */

export const RoomDetails = () => {
	const curRoom = useRecoilValue(curRoomState);
	const [filename, setFilename] = useState(false);
	const [file, setFile] = useState(undefined);
	const fileRef = useRef();
	const roomlogo = apiUrl + "/" + curRoom.icon;

	const currentDate = new Date(
		curRoom?.createdAt.replace(/^(\d{4}-\d{2}-\d{2}).*/, "$1")
	);
	const MonthsBefore = subMonths(currentDate, 0);
	const formattedCreatedAt = format(MonthsBefore, "yyyy MMM dd");

	const handleUpdateRoomAvatarSubmit = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("avatars", file);

		// TODO
		// Add functionality to change room logo
		console.log("change room avatar clicked");
	};

	const handleFileInputChange = () => {
		const [file] = fileRef.current?.files;
		const filename = file ? file?.name.substring(0, 15) : "";

		setFilename(filename);
		setFile(file);
	};

	return (
		<RoomDetailsSection>
			<section className='rmDetailsHeader'>
				{curRoom.name[0].toUpperCase() + curRoom.name.slice(1)}
			</section>
			<AvatarUpdate>
				<img
					src={filename ? URL.createObjectURL(file) : roomlogo}
					alt='logo'
				/>
				<span
					className='uploadedFileName'
					style={{ display: filename ? "flex" : "none" }}
				>
					{filename}
				</span>

				<form
					onSubmit={handleUpdateRoomAvatarSubmit}
					encType='multipart/form-data'
				>
					<input
						type='file'
						id='uploadNewFile'
						name='avatar'
						className='d-none'
						ref={fileRef}
						accept='image/png, image/jpeg, image/jpg'
						onChange={handleFileInputChange}
					/>
					<label htmlFor='uploadNewFile'>Upload</label>
					<button disabled={filename ? false : true}>
						{" "}
						change icon
					</button>
				</form>
			</AvatarUpdate>
			<CurrentRoomDetails>
				<section className='detailsTitle'>Details</section>

				<section className='detailsContent'>
					<div className='users_count'>
						<span className='text'>Users</span>
						<span className='count'>
							[ {curRoom.users.length} ]
						</span>
					</div>

					<div className='created_by'>
						<span className='text'>Created by</span>
						<span className='owner_name'>
							{curRoom.owner
								? curRoom.owner.email
								: "System"}
						</span>
					</div>

					<div className='created_at'>
						<span className='text'>Created at</span>
						<span className='format_time_ago'>
							{formattedCreatedAt}
						</span>
					</div>
				</section>
			</CurrentRoomDetails>
            <CurrentRoomUsers>
                
            </CurrentRoomUsers>
		</RoomDetailsSection>
	);
};
