/* eslint-disable*/
import {
	format,
	formatDistanceToNow,
	formatDistanceToNowStrict,
	subDays,
	subMonths,
} from "date-fns";

/**
 *  Reset Objects for resetting all states to defaults
 *  used in Home.js 80, 87, 95
 * */
export const reset = (resetall) => {
	for (let val in resetall) {
		resetall[val]();
	}
};

/* Singles Message Time ago timestamp */
export const customFormatDistanceToNow = (date) => {
	let distance = formatDistanceToNowStrict(date);

	if (distance.includes("minute")) {
		let temp = distance.split(" ");
		temp[1] = "m ago";
		return (distance = temp.join(""));
	} else if (distance.includes("hour")) {
		let temp = distance.split(" ");
		temp[1] = "h ago";
		return (distance = temp.join(""));
	} else if (distance.includes("second")) {
		let temp = distance.split(" ");
		temp[1] = "s ago";
		return (distance = temp.join(""));
	}

	return distance + " ago";
};


