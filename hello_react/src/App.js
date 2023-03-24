import { useState } from 'react';
import Hello from './components/Hello';
import Button from './components/Button';
import UserInfo from './components/UserInfo';


function App() {
  const [name, setName] = useState("");

  const handlerClick = () => {
    console.log("이름전달 버튼 클릭");
    setName("heehee");
  }

  return (
    <>
      <div>
        {/**JSX 주석 
    1. JSX는 Javascript 함수 return에 Html 태그 또는 다른 component 표현할 수 있는 표현식이다
    2. 하나의 Jsx 즉, return에는 하나의 태그 묶음만 들어올 수 있다. return은 무조건 하나
    3. <></> 비어있는 태그를 열고 닫으면 실제 렌더링 시에 무시된다.

  */}

      </div>
      <div>
        <Hello />
        <Button handlerClick={handlerClick} />
        <UserInfo name={name} phone="010-9442-0688" address="창원시 진해구" />  {/* 함수호출 */}
      </div>
    </>

  );
}

export default App;
