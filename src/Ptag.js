import React, { useEffect, useState, useContext } from 'react';
import { MoodContext } from './App';

function Ptag(props) {

  const {get}     =   useContext(MoodContext)

  return (
    <>
      <div style={{ marginTop: "25px" }}>
          <p>Current span count : {props.mycount}</p>
          <p>{get().mood}</p>
        </div>
    </>
  );
}

export default Ptag;