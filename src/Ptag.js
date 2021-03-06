import React, { useEffect, useState, useContext } from 'react';
import { MoodContext } from './App';

function Ptag(props) {

  const mood    =   useContext(MoodContext)

  return (
    <>
      <div style={{ marginTop: "25px" }}>
          <p>Current span count : {props.mycount}</p>
          <p>{mood.get()}</p>
        </div>
    </>
  );
}

export default Ptag;
