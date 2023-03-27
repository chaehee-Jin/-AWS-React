/**@jsxImportSource @emotion/react */
import React from "react";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Navigation } from 'react-minimal-side-navigation';
import * as S from "./style"
import { GrTest } from 'react-icons/gr';
import { HiHome } from 'react-icons/hi';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FcTodoList } from 'react-icons/fc';


const MainAside = () => {
    const navigate = useNavigate();   

    return(
        <aside css={S.style}>
            <Navigation
            activeItemId="/"
            onSelect={({ itemId }) => {
                navigate(itemId);
              
        }}
        items={[
            {
                title:"Home",
                itemId:'/',
                elemBefore: () => <HiHome/>
            },
            {
                title:"T1",
                itemId:'/t1',
                elemBefore: () => <GrTest/>
            },
            {
                title:"T2",
                itemId:'/t2',
                elemBefore: () => <GrTest/>
            },
            {
                title:"Sample",
                itemId:'/sample/input/1',
                elemBefore: () => <BsCardChecklist/>,
                subNav:[
                    {
                        title: 'input1',
                        itemId:'/sample/input/1',
                        elemBefore: () => < BiListCheck/>
                    }
                ]
            },
            {
                title:"List",
                itemId:'/users',
                elemBefore: () => <BsCardChecklist/>,
                subNav:[
                    {
                        title: '사용자 전체 조회',
                        itemId:'/users',
                        elemBefore: () => < FaUsers/>
                    }
                ]
            },
            {
                title:"Todo",
                itemId:'/Todo',
                elemBefore: () => <FcTodoList/>,
                subNav:[
                    {
                        title:'todoList',
                        itemId:'todolist',
                        elemBefore: () => < FaUsers/>

                    }
                ]
            }

              
            ]}
          />     
        </aside>
    );
};

export default MainAside;