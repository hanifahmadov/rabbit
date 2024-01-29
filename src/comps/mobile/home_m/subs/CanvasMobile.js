/* eslint-disable */
/* NPM */
import React from "react";
import { useRecoilState } from "recoil";


/* STYLED & STATES & APIS & HELPERS */
import { CanvasMobileSection } from "../styled/canvas_mobile.styled";
import { createNewRoomState } from "../../store_m/states";


/* SUBS */
import { CreateRoom } from "./CreateRoom";

export const CanvasMobile = ({ room }) => {
    const createNewRoom = useRecoilState(createNewRoomState)

    return (
        <CanvasMobileSection>
            {createNewRoom && <CreateRoom/>}
        </CanvasMobileSection>
    )

}