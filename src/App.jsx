
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'


const bottlesPromise = fetch('../public/bottles.json').then(res=> res.json())

function App() {
  

  return (
    <>
      
      <div>
        <Suspense fallback="Loading...">
          <Bottles bottlesPromise={bottlesPromise}></Bottles>

        </Suspense>
      </div>
      
    </>
  )
}

export default App
