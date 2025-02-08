import React from 'react'
import Header from './components/Header'

const App = () => {
  return (
    <>
  <Header></Header>
  <nav className=' flex py-5 px-10 items-center justify-between p-5 bg-green-800
 text-white'>
    <h2>hello </h2>
    <div className='flex gap-8 iteam-center'>
      <h4 className='text-xl'>about</h4>
      <h4 className='text-xl'>contact</h4>
      <h4 className='text-xl'>services</h4>
      <h4 className='text-xl'>your ac</h4>
    </div>
  </nav>


    </>
  )
}

export default App