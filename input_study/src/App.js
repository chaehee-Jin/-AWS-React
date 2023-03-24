/** @jsxImportSource @emotion/react */
import Main from "./pages/Main/Main"
import { Global } from "@emotion/react";
import { reset } from "./style/GlobalStyle"

function App() {
  return (
    <>
      <Global styles={reset}/>
      <Main/>
    </>
  
  );
}

export default App;
