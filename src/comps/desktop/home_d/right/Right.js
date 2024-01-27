/* eslint-disable */
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

/* STYLED & APIs & STATE */
import { RightSection } from "../styled/right.styled";

/* SUBS */
import { CustomCanvas } from "./CustomCanvas";
import { Board } from "./Board";


export const Right = () => {
  return (
    <RightSection>
        <CustomCanvas/>
        <Board/>
    </RightSection>
  )
}
