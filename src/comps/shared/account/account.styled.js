/* eslint-disable */
import styled from "styled-components";
import { clr, ff } from "../store/design";

//: ${(props) => console.log(props)}

export const AccountContainer = styled.div`
	${({ theme, $displayNavbarAccount }) =>
		`   

        position: relative;
    
        border: 3px solid ${
			$displayNavbarAccount ? "rgba(255, 255, 255, .8)" : clr.rgba.wht02
		};
        
        transition: all 0.35s ease-in-out;

        border-radius: 10px;

        

    
    
        .account-img {


            cursor: pointer;
            border-radius: 10px;
            overflow: hidden;

            
    
            img {
                width: 3.25rem;
                height: 3.25rem;
                border-radius: 10px;
                cursor: pointer;
                pointer-events: none;
                
                transition: all .25s ease-in-out;


            }
    
        }
    
       
    
        .account-dropdown {
            width: 10rem;
            position: absolute;
            left: 70px;
            bottom: -5px;

            border-radius: 5px;
            z-index: 1;

            padding-bottom: 8px;

            border: 4px solid black;

            border-radius: 5px;
            
            
            
    
            // background-color: ${clr.dark};
            // background: ${clr.rgba.wht02};

            // background: #112653;

            // background: #020816;

            // background:rgba(0, 0, 0, 1);

            color: ${clr.white02};

            background: ${clr.dark01};


            
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
                    border-radius: 5px;

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

                        border: 2px solid black; 
                        border-radius: 5px;
                    }

                    width: 60%;
                    text-align: center;
                    margin: .5rem 0rem;
                    border-radius: 5px;
                    

                    

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

            &:before {
                content:"";
                position: absolute;
                left: -22px;
                bottom: 15px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 10px 10px 10px;
                border-color: transparent rgb(0, 0, 0) transparent transparent;
                z-index:9998;
            }

            &:after {
                content:"";
                position: absolute;
                left: -17px;
                bottom: 15px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 10px 10px 10px;
                border-color: transparent ${clr.dark01} transparent transparent;
                z-index:9998;
            }
        }
        
        `}
`;
