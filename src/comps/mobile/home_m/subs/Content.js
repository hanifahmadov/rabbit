/* eslint-disable */
import React from "react";
import { useRecoilState } from "recoil";


/* STYLED & APIs & IMG */
import { ContentSection } from "../styled/content.styled";
import { roomsState } from "../../../home/homeStore/states";
import { Chat } from "./Chat";


/* SUBS */

export const Content = () => {
  const [rooms, setRooms] = useRecoilState(roomsState);

  
  return (
    <ContentSection>
       {rooms.map((room, index) => (
          <Chat key={index} room={room} />
       ))}
        
    </ContentSection>
  )
}
