import React, { useEffect, useState } from 'react';
import Ptag from './Ptag';


export const MoodContext = React.createContext();


function App() {

  const moods = {
    happy: 'I am 😇',
    sad: 'I am 😟'
  }

  const [count, setCount] = useState(0);
  const [spanCount, setSpanCount] = useState(0);
  

  function moodFunction(){
    let mood = "I am 🥸";
    const set = (m) =>  mood = m;
    const get = ()  =>  mood;
    return {set,get};   
  }
  
  let moood_fun = moodFunction();

  useEffect(() => {
    setSpanCount(count);
    document.title = count;
    console.log('Running effects')
    console.log(count);
    if(count % 2 === 0)
    {
      moood_fun.set(moods.happy);
    }
    else 
    {
      moood_fun.set(moods.sad);
    }

    console.log(moood_fun.get())

    return (() => {
      document.title = 0
      setSpanCount(0)
    })
  }, [count]);
  
  return (
    <>
      <MoodContext.Provider value={moodFunction()}>
      <div style={{ padding: "25px" }}>
        <div>
          <button onClick={() => { setCount(count + 1) }}>Increase</button>
          <button onClick={() => { setCount(0) }}>Reset</button>
          <button onClick={() => { setCount(count - 1) }}>Decrease</button>
        </div>
          <Ptag mycount={count} />
      </div>
      </MoodContext.Provider>
    </>
  );
}

export default App;
