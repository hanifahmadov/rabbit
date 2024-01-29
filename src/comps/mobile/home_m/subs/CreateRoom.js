/* eslint-disable */
import React, { useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormData from "form-data";


/* STYLED & STATES & APIS & HELPERS */
import {
	CreateRoomSection,
	FileInput,
	FileInstruction,
	FileOnDisplay,
	FilenameInput,
	FilenameInstruction,
	SubmitButton,
} from "../styled/create_room.styled";

import defaultLogo from "../../../home/homeStore/logo/default.png";
import infoLogo from "../../../home/homeStore/logo/info.png";
import { createNewRoomApi } from "../../../../apis/apiCalls"; 
import { userState } from "../../../auth/authStore/states";
import { createNewRoomState } from "../../store_m/states";

/* SUBS */

export const CreateRoom = ({ room }) => {
	const user = useRecoilValue(userState);
	const [ createNewRoom, setCreateNewRoom ] = useRecoilState(createNewRoomState)

	const logo = defaultLogo

	const newRoomNameRef = useRef();
	const fileRef = useRef();

	const text = "Default file selected";
	const [filename, setFilename] = useState(text);
	const [file, setFile] = useState();
	const [newRoomInput, setNewRoomInput] = useState("");

	const handleCreateRoom = (e) => {
		e.preventDefault();
		let data = new FormData();

		data.append("roomName", newRoomNameRef.current.value);
		data.append("icon", file);

		createNewRoomApi(user, data)
			.then((response) => {
				//handle success
				const { imgTitle } = response.data;
				console.log("new img created and title received: ", imgTitle);

				console.log("room name", newRoomNameRef.current.value);

				window.socket.emit("create_room", {
					roomName: newRoomNameRef.current.value,
					roomIconTitle: imgTitle ? imgTitle : "default_" + Math.floor(Math.random() * 9) + ".jpeg",
					roomOwner: user._id,
				});

				newRoomNameRef.current.value = "";
				setFilename(text);
				setCreateNewRoom(false)
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
		<CreateRoomSection>
			<section className='createRoomTitle'>Create Room</section>
			<form onSubmit={handleCreateRoom} encType='multipart/form-data'>
				<FileOnDisplay>
					<img src={file ? URL.createObjectURL(file) : logo} alt='logo' />

					<span className='filename'>{filename}</span>
				</FileOnDisplay>

				<FileInstruction>
					<img src={infoLogo} />
					<span>only ... jpg &nbsp;jpeg &nbsp;png</span>
				</FileInstruction>
				<FileInput htmlFor='files'>
					Select Avatar
					<input
						type='file'
						id='files'
						name='avatar'
						className='d-none'
						ref={fileRef}
						accept='image/png, image/jpeg, image/jpg'
						onChange={handleFileInputChange}
					/>
				</FileInput>
				<FilenameInstruction>
					<span className='info_label'>
						<img src={infoLogo} />
					</span>
					<label htmlFor='newroomInput'>The name must be a minimum of 3 characters.</label>
				</FilenameInstruction>
				<FilenameInput
					id='newroomInput'
					type='text'
					name='newroomInput'
					placeholder='Enter room name'
					ref={newRoomNameRef}
					onChange={(e) => setNewRoomInput(e.target.value)}
				/>

				<SubmitButton type='submit' disabled={newRoomInput.length < 3}>
					Submit
				</SubmitButton>
			</form>
		</CreateRoomSection>
	);
};
