import { Route,  Routes } from 'react-router-dom'
import Lobby from './screens/Lobby'
import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Lobby />} />
     </Routes>
    </>
  )
}

export default App
