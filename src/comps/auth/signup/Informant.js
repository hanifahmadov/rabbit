/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";

import { InformantSection } from './styled/informant.styled'

export const Informant = ({ informant }) => {

    const navigate = useNavigate();
    
	return (
		<InformantSection>
			<div className='title'>
				{informant == "avatar" && "User Avatar"}
				{informant == "email" && "Email Address"}
				{informant == "pwd" && "Password"}
				{informant == "conPwd" && "Confirm Password"}
			</div>

			<div className='content'>
				{informant == "avatar" && (
					<>
						<div>We got your back.</div>
						<div>
							There is a default avatar <br /> you'll get if you
							dont have one.
						</div>
					</>
				)}

				{informant == "email" && (
					<>
						<div>Email name can contains [ . _ % + - ]</div>
						<div>Must be between 2 and 63 characters long.</div>
						<div>Must contains @ sign.</div>
					</>
				)}

				{informant == "pwd" && (
					<>
						<div>Must be between 8 and 24 characters long.</div>
						<div>At least one lowercase letter is required.</div>
						<div>At least one digit (0-9) is required.</div>
					</>
				)}

				{informant == "conPwd" && (
					<>
						<div>Make sure the passwords match.</div>
					</>
				)}
			</div>

			<div className='footer_signup'>
				<p>
					Already have an account ?{" "}
					<span
						className='login'
						onClick={() => navigate("/welcome")}
					>
						Login.
					</span>
				</p>
			</div>
		</InformantSection>
	);
};
