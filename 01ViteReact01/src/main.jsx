import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//App kewal ek function h jo ek div return kr rha h
function MyApp(){
  return(
    <div>
      <h1>My App</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>

  <>
  <MyApp />
  
  </>

)
