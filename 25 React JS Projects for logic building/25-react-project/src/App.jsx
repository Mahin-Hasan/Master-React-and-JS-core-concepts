
import './App.css'
import PaginationTest from './components/1. Pagination/test'
import DigitalClock from './components/2. digital-clock'
import CountdownTimerTest from './components/3. countdown-timer/test'

function App() {

  return (
    <>
      <div className='App'>
        <h1 className='title'>25 React Projects for logic building</h1>
        <PaginationTest/>
        <DigitalClock/>
        <CountdownTimerTest/>
      </div>
    </>
  )
}

export default App
