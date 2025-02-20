import React, { useContext } from 'react'
import UserContext, { DataContext } from '../Context/UserContext'
import { Context } from '../Context/PostContext'

const Home = () => {
  const username= useContext(DataContext)
  // const name=PostContext(UserContext)
  const name=useContext(Context)
  return (
    <div>
        <h1>Home Page {username} {name}</h1>
    </div>
  )
}

export default Home