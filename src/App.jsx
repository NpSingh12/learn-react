import React from 'react'

const App = () => {
  let  user=" Rahul";
  const  changeuser=()=>{
    console.log(user);
     
    user ='Np Singh'
    console.log(user);
    
  }
  return (
    <div>
      <h1>UserName is {user}</h1>
      <button onClick={changeuser}>Change user</button>
    </div>
  )
}

export default App;