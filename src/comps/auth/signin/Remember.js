/* eslint-disable */
import React, { useState } from "react";
import { RememberSection } from "./styled/remember.styled";

export const Remember = ({remember, setRemember}) => {


	const handle = () => {
		setRemember(!remember)
		
	}
	

	return (
		<RememberSection
		
			remember={+remember}
		>

			<input type='checkbox' onClick={handle}/>
			<label className='rememberme_text'>Keep me signed in</label>
		</RememberSection>
	);
};
