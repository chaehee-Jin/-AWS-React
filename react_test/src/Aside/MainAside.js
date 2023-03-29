/**@jsxImportSource @emotion/react */
import React from "react";
import { Navigation } from 'react-minimal-side-navigation';
import { useNavigate } from 'react-router-dom';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import * as S from "./style"
import { css } from "@emotion/react";

const style = css`

`;


const MainAside = () => {
    const Navigate = useNavigate();
    

    return(
        <aside css={ style }>
            <Navigation
               activeItemId="/"
               onSelect={({ itemId }) => {
                   Navigate(itemId);
                 
           }}
           items={[
            {
                title:"Home",
                itemId:'/',
                elemBefore: () => <HiHome/>  
            },
            {
                title:"UserList",
                itemId:'/userlist',
                elemBefore: () => <GrTest/>
            },
            {
                title:"Information",
                itemId:'/information',
                elemBefore: () => <BsCardChecklist/>,
                subNav:[
                    {
                        title: "info",
                        itemId:'/info',
                        elemBefore: () => <BiListCheck/>
                    }
                ]

            }
        ]}    
            ></Navigation>


        </aside>
    );

}
export default MainAside;