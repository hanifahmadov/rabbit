/* eslint-disable */
import axios from "axios";
import apiUrl from "./apiUrl";

export const signUpApi = ({ email, password, passwordConfirmation }) => {
	return axios({
		url: apiUrl + "/signup/",
		method: "POST",
		withCredentials: true,
		credentials: "include",
		data: {
			credentials: {
				email,
				password,
				passwordConfirmation,
			},
		},
	});
};

export const signInApi = ({ email, password }) => {
	return axios({
		url: apiUrl + "/signin/",
		method: "POST",
		withCredentials: true,
		credentials: "include",
		data: {
			credentials: {
				email,
				password,
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
