/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";

function Th({children}){
    return (
        <th css={S.style}>{children}</th>

    );
}

export default Th;