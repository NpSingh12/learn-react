import React, { useContext } from 'react'
import Home from '../src/pages/Home'
import  { DataContext } from './Context/UserContext'
// import { UserContext } from './Context/PostContext'
import { Context } from './Context/PostContext'

const App = () => {

  const data= useContext(DataContext)
  const name=useContext(Context)
  console.log(data);
  console.log(name);
  
  
  return (
    <div>
      <h1>App.js </h1>
      <Home />
     
    </div>
  )
}

export default App