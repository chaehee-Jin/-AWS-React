import { css } from "@emotion/react";

export const modalContainer = css`
    position: absolute;
    top:0px;
    left: 0px;
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #000000dd;


`;

export const modalbox = css`
    display: none;
`;


export const modalHeader = css`
    display: flex;
    align-items: center;
    padding: 0px 10px;
    height: 20%;

`;

export const modalTitle = css`
    border-radius: 2px;
    padding: 2px;
    width: 300px;
    height: 200px;

    background-color: #fff;
    box-shadow: 0px 0px 10px 1px #000000;

`;
export const modalmain = css`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 60%;
`;

export const modifyInput  = css`
    margin-top: 10px;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 35px;
    text-align: center;

`;

export const modalFooter = css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px 10px;
    height: 20%;

`;
export const footerButton = css`
    margin-left: 5px;

`;
