import React from 'react'

const Card = (props,profile_photo) => {
  return (
    <div className='mr-7 bg-white text-black inline-block p-6 text-center  '>

        <img className='h-32 w-32 rounded-full mb-3'   src={props.profile_photo } alt="" />

        <h1 className='text-2xl font-semibold mb-4' >{props.name}</h1>

        <h2>{props.city}</h2>

        <h2>{props.age}</h2>
        
        <h2>{props.profession}</h2>
        
        <button className='mt-5 bg-green-700 text-white px-4 py-2 rounded font-mediam' >Add Friend</button>




    </div>
  )
}

export default Card