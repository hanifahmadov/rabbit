/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { FormAvatarSection } from "./styled/formAvatar.styled";

import default_img from "../../shared/logos/external/default_room_img.png";

export const FormAvatar = ({ avatar, setAvatar }) => {

    const avatarRef = useRef();

	const handleAvatarChange = () => {
		const [file] = avatarRef.current?.files;
		setAvatar(file);
	};


	return (
		<FormAvatarSection>
			<img
				src={avatar ? URL.createObjectURL(avatar) : default_img}
				className='img'
				alt='selected'
			/>
			<input
				type='file'
				id='avatar'
				name='avatar'
				className='d-none'
				ref={avatarRef}
				accept='image/png, image/jpeg, image/jpg'
				onChange={handleAvatarChange}
			/>
			<label htmlFor='avatar' className='label_avatar'>
				Upload Avatar
			</label>
		</FormAvatarSection>
	);
};
