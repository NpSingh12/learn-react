import React, { createContext } from 'react'


export const Context=createContext();

const PostContext = ({children}) => {
    const sername='singh'
  return (
    <div>
        <Context.Provider value={sername} >
            {children}
        </Context.Provider>
    </div>
  )
}

export default PostContext