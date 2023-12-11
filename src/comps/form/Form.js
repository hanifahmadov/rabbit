/* eslint-disable */
import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { io } from "socket.io-client";
import { produce } from "immer";

// states
import { socketStateDefaults } from "../shared/store/states";

// apiURL
import apiUrl from "../../apis/apiUrl";

export const Form = () => {
	const [socketState, setSocketState] = useRecoilState(socketStateDefaults);
   

	return (
		<div>
			<button onClick={() => setSocketState(newSocketState)}>
				Connect
			</button>
		</div>
	);
};
