

import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import MainAside from './components/Aside/MainAside/MainAside';
import InputSample from './pages/InputSample/InputSample';
import UserList from './pages/UserList/UserList';
import { reset } from './styles/Golbal/reset';

// component는 함수이다
function Test1(){
  return (<h1>test1</h1>);
}
//html 태그를 리턴해준다, 같은 파일에 호출되어 있으므로 임폴트를 하지 않아도 된다
// 라우터를 써서 이런 식이 가능하다
function Test2(){
  return (<h1>test2</h1>);
}
function App() {
  // 라우팅을 해주기 위해서 routes라고 묶여주어야하고, 주소를 들고온다
  // user라는 주소로가면 userlist를 렌더링한다는것을 의미한다
  return (
    <>
      <Global styles ={reset}></Global>
      <MainAside/>
      <Routes> 
        <Route path="/t1" Component={Test1}/>
        <Route path="/t2" Component={Test2}/>
        <Route path="/sample/input/1" Component={InputSample}/>
        <Route path="/users" Component={UserList}/>
      </Routes>
    </>
  );
}

export default App;
