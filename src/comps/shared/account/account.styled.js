/* eslint-disable */
import styled from "styled-components";
import { clr, ff } from "../store/design";

//: ${(props) => console.log(props)}

export const AccountContainer = styled.div`
	${({ theme, $displayNavbarAccount }) =>
		`   
        margin-left: 0.5rem;
        position: relative;
    
        border: 3px solid ${
			$displayNavbarAccount ? "rgba(255, 255, 255, .8)" : clr.rgba.wht02
		};
        
        transition: all 0.35s ease-in-out;

        border-radius: 50%;

        

        
    
        .account-img {


            cursor: pointer;
            border-radius: 50%;
            overflow: hidden;
    
            img {
                width: 2.1rem;
                border-radius: 50%;
                cursor: pointer;
                pointer-events: none;
                transform: ${
					$displayNavbarAccount ? "rotate(15deg)" : "rotate(0deg);"
				};
                transition: all .25s ease-in-out;


            }
    
        }
    
       
    
        .account-dropdown {
            width: 10rem;
            position: absolute;
            right: -5px;
            top: 50px;
            border-radius: 5px;
            z-index: 1;

            padding-bottom: 8px;
            
    
            // background-color: ${clr.dark};
            // background: ${clr.rgba.wht02};

            background: #112653;
            color: ${clr.white02};


            
            
    
            .triangle {
                position: absolute;
                top: -7px;
                right: 3px;
                width: 0;
                height: 0;
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
                border-bottom: 15px solid #112653;
                z-index: -10;
            }
    
            .account-dropdown-links {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
    
                padding: .5rem 0rem 0rem 0rem;

                font-size: 0.9rem;

                .account-dropdown-links-img {

                    
                      pointer-events: none;
                      display: block;
                      margin: .5rem 0rem;




                    background: ${clr.rgba.wht01};
                    border-radius: 5px;

                   
                   

                    img {
                        width: 6rem;
                        border-radius: 5px;
                        pointer-events: none;
                        display: inline-block;
                        box-shadow: rgba(0, 0, 0, 1) 0px 0px .5px .5px;
                    }

                }
    
    
                div {

                    pointer-events: none;                   

                    a {
                        display: inline-block;
                        width: 100%;
                        font-family: ${ff.opensans};
                        letter-spacing: .5px;
                        // font-weight: 900;
                        text-decoration: none;
                        color: ${clr.white03}; 
                        pointer-events: auto;
                        padding: .3rem .4rem;    
                    }

                    width: 60%;
                    text-align: center;
                    margin: .5rem 0rem;
                    border-radius: 3px;
                    

                    

                    font-weight: 700;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all .1s ease-in-out;
                    background: ${clr.rgba.wht01};

                 
                    cursor: pointer;



                    &:hover {
                        background: ${clr.atag2};
                        transition: background .35s ease-in-out;
                    }

                    &:active {
                        transform: scale(0.975);
                    }

                }
            }
        }
        
        `}
`;
