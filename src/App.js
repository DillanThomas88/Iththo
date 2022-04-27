
import React, {useEffect, useState} from 'react';
import './output.css'
import Images from './images';
import Board from './components/board';



function App() {

    return (
      <div style={{height: window.innerHeight, width: window.innerWidth}} className="font-default bg-neutral-800 overflow-hidden">
        <header>

        </header>

        <main className='flex flex-col h-full justify-center items-center text-center'>
          <Board />
        </main>

        <footer>

        </footer>
  
      </div>
    );
 

}

export default App;
