/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormData from "form-data";
import axios from "axios";

/* STATE & STYLED & API & IMG & VARIANTS */
import {
	CreateRoomSection,
	FileInput,
	FileInstruction,
	FileOnDisplay,
	FilenameInput,
	FilenameInstruction,
	SubmitButton,
} from "./styled/create_room.styled";
import { userState } from "../../auth/authStore/states";
import defaultLogo from "../homeStore/logo/default.png";
import infoLogo from "../homeStore/logo/info.png";
import { curRoomState, displayState } from "../homeStore/states";
import { createRoomVariant } from "../homeStore/variants";
import { createNewRoomApi } from "../../../apis/apiCalls";

/* SUBS */

export const CreateRoom = () => {
	const [display, setDisplay] = useRecoilState(displayState);
	const user = useRecoilValue(userState);


	const newRoomNameRef = useRef();
	const fileRef = useRef();

	const text = "Default file selected";
	const [filename, setFilename] = useState(text);
	const [file, setFile] = useState();
	const [newRoomInput, setNewRoomInput] = useState("");

	const handleFileInputChange = () => {
		const [file] = fileRef.current?.files;
		const filename = file
			? file?.name.substring(0, 15)
			: `Default file selected`;

		setFilename(filename);
		setFile(file);
	};

	const handleCreateRoomSubmit = (e) => {
		e.preventDefault();
		let data = new FormData();

		data.append('roomName', newRoomNameRef.current.value)
		data.append("icon", file);

		createNewRoomApi(user,data)
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

	return (
		<CreateRoomSection
			variants={createRoomVariant}
			initial='initial'
			animate={display ? "animate" : "exit"}
		>
			<section className='createRoomTitle'>Create New Room</section>
			<form
				onSubmit={handleCreateRoomSubmit}
				encType='multipart/form-data'
			>
				<FileOnDisplay>
					<img
						src={file ? URL.createObjectURL(file) : defaultLogo}
						alt='logo'
					/>

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
					<label htmlFor='newroomInput'>
						The name must be a minimum of 3 characters.
					</label>
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
