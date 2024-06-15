import React, {useState} from 'react';

function Input({ movieValue, handleChange, handleKeyPress, handleResponse }) {
  return (
    <div className="set">
        <input type="text" className="input" placeholder="Enter movie..." value={movieValue} onChange={e => handleChange(e)} onKeyPress={e => handleKeyPress(e)}/>
        <button className="button" onClick={e => handleKeyPress(e)}>Search</button>
      </div>
  )
}

export default Input;
