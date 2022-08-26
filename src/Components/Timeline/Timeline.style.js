import styled from "styled-components";

export const TimeLine = styled.ul`
   
    width: ${props => ((props.listsLen*250) + "px")};              
    position: relative;
    display: flex;
    flex-direction: row;
    overflow: visible;
    height: 250px;

    &::before {
        content: "";
        position: absolute;
        /* top: 50%; */
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 5px;
        background: linear-gradient(294.72deg, #FF4581 9.05%, #4388DD 79.28%);
        opacity: 0.1;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        transform: translateY(-50%);
        width: ${(props) => {return ((props.activeLen === 1)? "32px":((props.activeLen-1)*250 + "px"))}};
        border-top: 2px dotted #FF4581;
    }

    & li {
        /* transform: translateX(-50%); */
    }

    & li:first-child {
        padding-left: 32px;
    }

    & li:first-child .head {
        /* padding-left: 2rem; */
        margin-left: 33px;
    }

    /* Dots */

    & li:nth-child(odd) .data::before {
        content: "";
        height: 13px;
        width: 13px;
        background-color: #940030;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%,-50%);
    }

    & li:nth-child(odd) .data::after {
        content: "";
        height: 25px;
        width: 25px;
        background-color: rgba(255, 69, 129, 0.1);;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%,-50%);
    }

    & li:nth-child(even) .data::before {
        content: "";
        height: 13px;
        width: 13px;
        background-color: #940030;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-50%,50%);
    }

    & li:nth-child(even) .data::after {
        content: "";
        height: 25px;
        width: 25px;
        background-color: rgba(255, 69, 129, 0.1);;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-50%,50%);
    }

    & li:nth-child(odd) .head{
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%,-100%);
        display: flex;
        gap: 5px;
        padding-bottom: 10px;
        font-family: "Inter" , Arial, Helvetica, sans-serif;
        font-weight: 600;
        font-size: 1rem;
    }

    & li:nth-child(even) .head{
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-30%,40%);
        display: flex;
        gap: 5px;
        font-family: "Inter" , Arial, Helvetica, sans-serif;
        font-weight: 600;
        font-size: 1rem;
    }

    & li:nth-child(even) .data{
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        border-left: 1px solid #FF4581;
        padding-left: 10px;
        padding-bottom: 60px;
    }

    & li:nth-child(odd) .data{
        position: absolute;
        top: 0;
        border-left: 1px solid #FF4581;
        padding-top: 60px;
        padding-left: 10px;
    }

    & li .data .tag {
        font-family: "Inter" , Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 12px;
    }

    & li .data .desc {
        margin: 5px 0;
        display: flex;
        gap: 5px;
        align-items: flex-start;
    }

    & li .data .info {
        width: 300px;
    }

`

export const ListEl = styled.li`
    display: inline-block;
    width: 250px;
    /* padding: 1rem; */
    color: white;
    position: relative;

    & .questNo,
    & .tagIcon {
        color: #ff4581;
    }

    & .data::before {
        background-color: ${(props) => {return (props.status === "completed")? "#FF4581 !important": "#940030 !important"}};
    }
`