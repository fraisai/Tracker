import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from "./components/Header.jsx";
import StoreFront from "./containers/StoreFront.jsx";
// http://localhost:8000/check = check server

const App = () => {
  return (
    <div>
      <Header />
      <StoreFront />
    </div>
  )
}

export default App;


//       {/* <Input /> */}
      // {/* <Routes>
      //   <Route path='/' element={MainContainer}></Route>
      // </Routes> */}
