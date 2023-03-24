import PropsTest from "./components/PropsTest";
import UserInfo from "./components/UserInfo";


function App() {
  const userList = [
    { username: "aaa", name: "AAA", email: "aaa@naver.com" },
    { username: "bbb", name: "BBB", email: "bbb@naver.com" },
    { username: "ccc", name: "CCC", email: "ccc@naver.com" },
    { username: "ddd", name: "DDD" }
  ];

  return (
    <>
      <PropsTest username="aaa" name="진채희" email="aaa@naver.com"
        handlerClick={() => console.log("클릭함!!")} />

        {['heehee', 'haha', 'hoho']}

      {userList.map(user =>
      (
        <UserInfo username={user.username} name={user.name} email={user.email}/>
      )
      )}
    </>

  );
}

export default App;
