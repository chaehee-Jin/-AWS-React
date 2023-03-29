import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import MainAside from './Aside/MainAside';
import { reset } from './style/Global/reset';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react'

import './App.css';
import Todo from './Todo/Todo';

function Aside() {
  return(<h1>mainsaide</h1>);

}

function App(){
  return (
    <>
      <Global styles ={reset}></Global>
      <MainAside/>
      <Routes> 
        <Route path="/Aside" component={Aside}/>
        <Route path="/todo" component={Todo}/>
       
      </Routes>
    </>
  );


}

export default App;
