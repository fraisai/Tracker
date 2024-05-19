import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './imports.js';
// http://localhost:8000/check = check server

const App = () => {
  return (
    <div>
      HEY APP
      <Header />
      {/* <Routes>
        <Route path='/' element={MainContainer}></Route>
      </Routes> */}
    </div>
  )
}

export default App