import React, { useEffect, useState } from 'react';
import Ptag from './Ptag';


export const MoodContext = React.createContext();



function moodFunction(){
  let msg = {mood: "I am 🥸"}

  const set =  (mood) =>     msg = {mood};
  const get = () => ({...msg })
  return {set,get  };   

}

const moodeFn = moodFunction();


function App() {

  const moods = {
    happy: 'I am happy 😇',
    sad: 'I am sad 😟'
  }

  const [count, setCount] = useState(0);
  const [spanCount, setSpanCount] = useState(0);
  

  
  let {set,get} = moodeFn

  useEffect(() => {
    
    setSpanCount(count);
    document.title = count;
    console.log('Running effects')
    console.log(count);
    if(count % 2 === 0)
    {
      set(moods.happy);
    }
    else 
    {
      set(moods.sad);
    }

    

    return (() => {
      document.title = 0
      setSpanCount(0)
    })
  }, [count]);
  
  return (
    <>
      <MoodContext.Provider value={{get}}>
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