// rsc 는 자동완성 
/**@jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';

//app.js만을 가져오면서 만들면 복잡해지므로 component를 만들어서 함수를 따로 만들어서 빼준다 
// component들을 ref를 만들어서 구분지어 해당 객체를 찾아가게끔 만들어준다
// 똑같은 component들이 있으므로 안에 기능이 변하기 때문에 onclick속성이 유동적(삭제, 추가, 수정이 다 되니까)이어야한다
// component들은 props라는 매개변수(속성)를 가진다
// props로 계속 속성들을 내려주면 어디에서 오류가 난건지를 한번에 알수가 없다 그때쓰는 것이 리덕스이다, 이것은 static 같은 존재이다
// reacpt는 속성들을 내려주면서 전달해주기때문에 상태관리 즉, props가 중요하다
// html은 단순히 글을 쓰기만 하는 기능만 한다. 따라서 스테이트(상태관리)를 주어서 글에서 오류가 난 부분이 어디인지 파악해야한다




// component가 처음 들고올때 
const UserList = () => {
    useEffect(() => {
        console.log("컴포넌트 렌더링");
    },[]);

    // 초깃값
    const user ={
        id:0,
        username:'',
        password:'',
        name:'',
        email:'',
        modifyFlag:false
        // inputs는 onchange가 일어나면 계속해서 변함, 추가되는 만큼 user의 객체들이 늘어남 
    }

    // 초깃값을 자동증가
    // 입력될때마다 값을 바꾼다, 상태를 계속 유지, 클릭이 일어날때만 동작
    
    const userIndex = useRef(1);
    const [users, setUsers] = useState([]);
    const[inputs, setInputs] = useState(user);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const addButtonRef = useRef();

    // target에서 input이랑 value를 가지고 옴, target이 다똑같이 생겨서 name을 통해 구분 
    const inputHandler = (e) => {
        const { name, value } = e.target;
        //  겹치는 것이 있으면 덮어버림 
        setInputs({...inputs, [name]: value});

    }
    // enter을 눌렀을때 넘어가도록 만든것 = clickevent
    const keyupHandler = (e) => {
        if(e.keyCode === 13){
            let index = 0;
            switch(e.target.name){

                //username은 0번 index 다음 index 1에서 focus를 준다 
                case'username': index =1; break;
                case'password': index =2; break;
                case'name': index =3; break;
                // default로 찾아가면 index는 0을 유지
                default:addButtonRef.current.click();

            }
            
            if(index !== 0){
                // inputRefs가 배열이라서 1로 잡아줌 
            inputRefs[index].current.focus();
            }
            
        }
    }
   
    const addHandler = () => {
        // 얕은 복사(주소값을 복사)와 깊은 복사(값을 들고와서 새로운 값으로 생성), 사용한것은 깊은 복사
        const user = {
            ...inputs

        };
        user.id = userIndex.current++;
      
        setUsers([...users, user]);
        }

        // 데이터 삭제
    const onRemove = (index) => {
        // users안에는 객체가 들어있으므로 객체를 찾아야함 
        //index는 +1 =++되는 규칙을 가지고 있으므로 -1로 할당한다

        // users.splice(index -1, 1);
        // setUsers([...users]);

        // 필터는 해당하는 조건에 참인 것들만 걸러준다
        //users가 가지고 있는 것들중 참인것들만 골라서 새로 리스트를 만들어준다
        
        setUsers(users.filter(user => user.id !== index));

        }
    // 해당 아이디 값을 가지고 있는 것들만 가져와야함, 삼항연산자에서 input들을 가지고 있는 것들만 실행 
        const onModify = (index) => {
            setUsers(users.map(user => {
                if(user.id === index) {
                    // modify를 클릭했을때 user의 정보를 그대로 input에 옮겨준다
                    setInputs({...user});
                    user.modifyFlag = true;
                    //modify가 false인것까지 옮겨져서 true로 바꿔줌 
                }else {
                    user.modifyFlag = false;
                }
                // 배열의 users들중 해당 modify를 가진 정보만 true로 찾아진다, 나머지는 false
                return user;
            }));
        }
    
    
    const onSave = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                
                user.modifyFlag = true;
                return {
                    ...inputs,
                    id: user.id
                };
            }
            return user;
        }));
    }


    return (
        // userlist를 들고올경우 div라는 한 덩어리가 들고와진다, 한 페이지형식으로 들고올경우 재사용되는 것이 아니면 component로 나눌필요가 없다
        <div css={S.Container}>
            <div>
                <input type="text"onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username'  ref={inputRefs[0]} defaultValue={inputs.username}/>
                <input type="text"onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password'  ref={inputRefs[1]} defaultValue={inputs.password}/>
                <input type="text"onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]} defaultValue={inputs.name}/>
                <input type="text"onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]} defaultValue={inputs.email}/>
                <button type='button' onClick={addHandler} ref={addButtonRef}>추가</button>
            </div>
            <table css={S.Table}>
                <thead>
                    <tr>
                        <th css={S.ThAndTd}>index</th>
                        <th css={S.ThAndTd}>username</th>
                        <th css={S.ThAndTd}>password</th>
                        <th css={S.ThAndTd}>name</th>
                        <th css={S.ThAndTd}>email</th>
                        <th css={S.ThAndTd}>update</th>
                        <th css={S.ThAndTd}>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map함수는 array이어야지 동작한다 list입장에서 키는  index,  value는 배열안에들어있는 값이다 이 2개를 반복을 돌리면서 계속 가공을 해서 새로운 배열을 만든다 */}
                    {/* user 배열에 들어있는 정보들을 가지고 jsx라는 형식으로 배열을 다시 만든다, 이런면 렌더링이 된다 */}
                  
                    {users.map(user => {

                        return(

                            //tr 통째로 매번 생성, 여기에 map을 사용해 키값을 주면 키값이 매번 할당된다 이키를 안쓰면 처음부터 끝까지 재렌더링된다
                            // 키를 쓰는 이유는 리엑트가 변화된 부분만 바꿔주는데 키값을 주면 변화된 부분만 재렌더링을 해준다
                            // 예를 들어 비밀번호만 바뀌었을 경우 비밀번호만 재렌더링하고 나머지는 그대로 둔다
                            // 처음부터 다시 다 들고오게되면 에니메이션 효과등이 적용되지 않을수 있다
                            // 렌더링은 페이지를 처음부터 끝까지 불러오는 것을 말한다 

                            // 버튼 등은 재사용될 가능성이 있으므로 component로 나누어주어야한다
                            <tr key={user.id}>
                                {/* 삼항연산자, 수정된 값아니면 원래 입력된 값 저장  */}
                                <td css={S.ThAndTd}>{user.id}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]} defaultValue={user.username} />) : user.username}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]} defaultValue={user.password} />) : user.password}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]} defaultValue={user.name} />) : user.name}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]} defaultValue={user.email} />) : user.email}</td>
                                <td css={S.ThAndTd}>
                                    {user.modifyFlag 
                                        ? (<button onClick={() => onSave(user.id)}>확인</button>)
                                        : (<button onClick={() => onModify(user.id)}>수정</button>) 
                                    }
                                </td>
                                <td css={S.ThAndTd}>
                                    <button onClick={() => onRemove(user.id)}>삭제</button>    
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

                
            </table>

            
        </div>
    );
};
export default UserList;