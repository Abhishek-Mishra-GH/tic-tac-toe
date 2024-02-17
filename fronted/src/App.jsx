import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import MainPage from './components/MainPage';

function App() {
  const [isOnline, setIsOnline] = useState(false);
  const [isMainPage, setIsMainPage] = useState(true);
  
  return (
    isMainPage ? <MainPage setOnline={setIsOnline} setIsMainPage={setIsMainPage}/> : <Board isOnline={isOnline} setIsMainPage={setIsMainPage}/>
  )
}

export default App