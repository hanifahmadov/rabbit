/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import FormData from "form-data";
import axios from "axios";

// states
import { socketConnectionDefaults } from "../shared/store/states";

// styled
import { CreateRoomSection } from "./styled/createRoomSection.styled";
import default_img from "../shared/logos/external/default_room_img.png";
import info_img from "../shared/logos/external/information_9195785.png";
import apiUrl from "../../apis/apiUrl";
import { userState } from "../auth/authStore/states";

export const CreateRoom = ({ user, setDisplay }) => {
	const newRoomNameRef = useRef();
	const fileRef = useRef();

	const text = "Default file selected";
	const [filename, setFilename] = useState(text);
	const [file, setFile] = useState();
	const [newRoomInput, setNewRoomInput] = useState("");

	const handleCreateRoomSubmit = (e) => {
		e.preventDefault();
		let data = new FormData();
		data.append("icon", file);

		axios
			.post( apiUrl + "/newroom_icon", data, {
				headers: {
					accept: "application/json",
					"Accept-Language": "en-US,en;q=0.8",
					"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
					Authorization: `Bearer ${user.accessToken}`,
				},
			})
			.then((response) => {
				//handle success
				const { imgTitle } = response.data;
				console.log("new img created and title received: ", imgTitle);

				console.log("room name", newRoomNameRef.current.value);

				window.socket.emit("create_room", {
					roomName: newRoomNameRef.current.value,
					roomIconTitle: imgTitle
						? imgTitle
						: "default_" + Math.floor(Math.random() * 9) + ".jpeg",
					roomOwner: user._id,
				});

				newRoomNameRef.current.value = "";
				setDisplay(false);
				setFilename(text);
				setFile();
			})
			.catch((error) => {
				//handle error
				console.log("create newroom avatars error");
			});
	};

	const handleFileInputChange = () => {
		const [file] = fileRef.current?.files;
		const filename = file
			? file?.name.substring(0, 15)
			: `Default file selected`;

		setFilename(filename);
		setFile(file);
	};
	return (
		<CreateRoomSection id='createRoomContainer'>
			<section className='header'>
				<h5>Create New Room</h5>
			</section>

			<form
				onSubmit={handleCreateRoomSubmit}
				encType='multipart/form-data'
			>
				<div className='selected_files'>
					<img
						src={file ? URL.createObjectURL(file) : default_img}
						className='img'
						alt='selected'
					/>

					<span className='filename'>{filename}</span>
				</div>

				<div className='info_about_image'>
					<img src={info_img} />
					<span>only ... jpg &nbsp; jpeg &nbsp; png</span>
				</div>
				<div className='select_files'>
					<input
						type='file'
						id='files'
						name='avatar'
						className='d-none'
						ref={fileRef}
						accept='image/png, image/jpeg, image/jpg'
						onChange={handleFileInputChange}
					/>
					<label htmlFor='files' className='select_file'>
						Select file
					</label>
				</div>
				<div className='newRoomName_label_wrapper'>
					<span className='info_label'>
						<img src={info_img} />
					</span>
					<label htmlFor='newroomInput'>
						The name must be a minimum of 3 characters.
					</label>
				</div>
				<input
					id='newroomInput'
					type='text'
					name='newroomInput'
					placeholder='Enter room name'
					ref={newRoomNameRef}
					onChange={(e) => setNewRoomInput(e.target.value)}
				/>

				<button type='submit' disabled={newRoomInput.length < 3}>
					Submit
				</button>
			</form>
		</CreateRoomSection>
	);
};
