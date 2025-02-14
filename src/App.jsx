import axios from "axios";
import React from "react";
import { useState } from "react";

const App = () => {

  const [data, setdata] = useState([])
  
  const getdata= async ()=>{
     const response = await axios.get('https://picsum.photos/v2/list')

     setdata(response.data);

     console.log(data);
     
     
  }


  return (
    <div className="p-10">

      <button onClick={getdata} className=" bg-teal-300 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-75">
        Get Data
      </button>
      <div className="p-5 bg-gray-950"> {data.map(function(elem, idx){
        return <div key={idx} className="bg-gray-50 text-black w-full items-center flex justify-between px-7 py-6 rounded m-3">
          <img className="h-40 text-start" src={elem.download_url
} alt="" />
          <h1>{elem.author}</h1>


        </div>
      })} </div>
    </div>
  );
};

export default App;
