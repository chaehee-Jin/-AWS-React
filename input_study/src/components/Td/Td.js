/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";

function Td({children}){
    return (
        <td css={S.style}>{children}</td>

    );
}

export default Td;