/* eslint-disable */
import axios from "axios";
import apiUrl from "./apiUrl";

export const signUpApi = (data) => {
	console.log("api URL", apiUrl);

	return axios({
		url: apiUrl + "/signup/",
		method: "POST",
		withCredentials: true,
		credentials: "include",
		data,

		headers: {
			accept: "application/json",
			"Accept-Language": "en-US,en;q=0.8",
			"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
		},
	});
};

export const signInApi = ({ email, password, remember }) => {
	return axios({
		url: apiUrl + "/signin/",
		method: "POST",
		withCredentials: true,
		credentials: "include",
		data: {
			credentials: {
				email,
				password,
				remember,
			},
		},
	});
};

export const changePwdApi = ({ oldPassword, newPassword }, accessToken) => {
	return axios({
		url: apiUrl + "/changepwd/",
		method: "PATCH",
		withCredentials: true,
		credentials: "include",
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		data: {
			passwords: {
				old: oldPassword,
				new: newPassword,
			},
		},
	});
};

export const signOutApi = ({ accessToken, _id }) => {
	return axios({
		url: apiUrl + "/signout",
		method: "DELETE",
		withCredentials: true,
		credentials: "include",
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		data: {
			_id,
		},
	});
};

export const useRefreshAccessApi = () => {
	return axios({
		url: apiUrl + "/refreshAccess",
		method: "GET",
		withCredentials: true,
		credentials: "include",
	});
};

export const useVerifyAccessApi = ({ accessToken }) => {
	return axios({
		url: apiUrl + "/verifyaccess",
		method: "GET",
		withCredentials: true,
		credentials: "include",
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
};

export const createNewRoomApi = (user, data) => {
	return axios({
		url: apiUrl + "/newroom_icon",
		method: "POST",
		withCredentials: true,
		credentials: "include",
		data,
		headers: {
			accept: "application/json",
			"Accept-Language": "en-US,en;q=0.8",
			"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
			Authorization: `Bearer ${user.accessToken}`,
		},
	});
};

/* 

.post( apiUrl + "/newroom_icon", data, {
				headers: {
					accept: "application/json",
					"Accept-Language": "en-US,en;q=0.8",
					"Content-Type": `multipart/form-data; boundary=${data._boundary}`,
					Authorization: `Bearer ${user.accessToken}`,
				},
			})

*/
