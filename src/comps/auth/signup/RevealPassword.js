/* eslint-disable */
import React from "react";
import { RevealPasswordSpan } from './Styled'

export const RevealPassword = ({ val, reveal, setReveal }) => {
	return (

			<RevealPasswordSpan
				onClick={() => setReveal(!reveal)}
				style={
					val.length > 0
						? { pointerEvents: "auto", opacity: 1 }
						: { pointerEvents: "none", opacity: 0.3 }
				}
			>
				{reveal ? "hide" : "show"}
			</RevealPasswordSpan>

	);
};
