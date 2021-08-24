import React, { useEffect, useState } from 'react';
  import Ptag from './Ptag';


  export const MoodContext = React.createContext();


  function App() {

    const moods = {
      happy: 'I am happy 😇',
      sad: 'I am sad 😟'
    }

    const [count, setCount] = useState(0);
    
    const [mood,setMood] = useState({mood:'no mood'})

    useEffect(() => {

      document.title = count;
      
      setMood({ mood : (count % 2 === 0 ? moods.happy : moods.sad) })
      
      return (() => {
        document.title = 0
      })
    }, [count]);
    
    return (
      <>
        <MoodContext.Provider value={ {...mood}}>
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