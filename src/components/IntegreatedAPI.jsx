import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

const IntegreatedAPI = (props) => {
    const [data, setdata] = useState([])
    const getdata= async()=>{
        const response= await axios.get('https://picsum.photos/v2/list')

        setdata(response.data)

    }

    useEffect(() => {
     getdata();
    }, [])
    


  return ( 
    <div className="p-10">
  
  {/* <button onClick={getdata} className=" bg-teal-300 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-75">
    Get Data
  </button> */}
  <div className="p-5 bg-gray-950"> {data.map(function(elem, idx){
    return <div key={idx} className="mr-7 bg-white text-black inline-block p-6 text-center mb-7 active:scale-85 hover:scale-95">
      <img className="h-40 text-start" src={elem.download_url
} alt="" />
      <h1>{elem.author}</h1>


    </div>
  })} </div>
</div>
);
};

 

export default IntegreatedAPI