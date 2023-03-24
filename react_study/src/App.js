
import { Route, Routes } from 'react-router-dom';

function Test1(){
  return (<h1>test1</h1>);
}
function Test2(){
  return (<h1>test2</h1>);
}
function App() {
  return (
    <>
    <Routes>
      <Route path="/t1" Component={Test1}/>
      <Route path="/t2" Component={Test2}/>
    </Routes>
    </>
  );
}

export default App;
