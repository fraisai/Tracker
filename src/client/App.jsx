import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './imports.js';
import { StoreFront } from './imports.js';
// http://localhost:8000/check = check server

const App = () => {
  return (
    <div>
      <Header />

      {/* <Input /> */}
      {/* <Routes>
        <Route path='/' element={MainContainer}></Route>
      </Routes> */}
      <StoreFront />
    </div>
  )
}

export default App