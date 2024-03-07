import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { Route, Routes, Link } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={MainContainer}></Route>
      </Routes>
      <MainContainer />
    </div>
  )
}

export default App