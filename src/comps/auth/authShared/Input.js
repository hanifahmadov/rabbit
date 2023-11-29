/* eslint-disable */
import React from "react";

import { InputContainer, StyledInput, StyledLabel } from "./Styled";

// type > | email | pwd | confirmPwd
// emailRef > will auto focus on email input when page load on register url
export const Input = React.forwardRef(
	({ reveal, type, val, setVal }, emailRef) => {
		let placeholderText = (type) => {
			if (type === "email") return "Email address";
			if (type === "pwd") return "Password";
			if (type === "confirmPwd") return "Confirm Password";
		};

		let labelText = (type) => {
			if (type === "email") return "Email address";
			if (type === "pwd") return "Password";
			if (type === "confirmPwd") return "Password Confirmation";
		};

		let dynamicType = (type, reveal) => {
			// if (type === "email") return "email";
			// if (reveal) return "text";
			// return "password";
			return "email";
		};

		return (
			<InputContainer>
				<StyledLabel htmlFor={type}>{labelText(type)}</StyledLabel>
				<StyledInput
					ref={emailRef}
					type={dynamicType(type, reveal)}
					id={type}
					placeholder={placeholderText(type)}
					autoComplete="on"
					onChange={(e) => setVal(e.target.value)}
					value={val}
					required={false}
				/>
			</InputContainer>
		);
	}
);
