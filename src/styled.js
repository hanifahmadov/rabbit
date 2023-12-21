/* eslint-disable */
import styled, { createGlobalStyle } from "styled-components";
import { clr } from "./comps/shared/store/design";

export const GlobalStyled = createGlobalStyle`

    body {
    
        // background-image: url();
        // background-attachment:fixed;
        // background-repeat: no-repeat;
        // background-size: cover;

        background: ${clr.dark02}

    }
`;
