import React from 'react'
import { useState, useEffect } from 'react'
import Bloglist from './Bloglist'


const Dash = () => {
  const [dBlogs, setdBlogs] = useState(null)
  const [isPending, setIsPending]= useState(true)


  useEffect(()=>{
    setTimeout(() => {
      fetch("http://localhost:8000/dblogs")
      .then(res => {
        return res.json();
      })
      .then(data =>{
        // console.log(dat)
        setdBlogs(data);
        setIsPending(false)
      })
    }, 100);
   
  }, []);

  return ( 
    <div className='home'>
      { isPending && <div style={{textAlign: "left"}}>Loading...</div>}
     {dBlogs && <Bloglist blog = {dBlogs} name = "Major Blogs"  />}
    </div>
   );
}
export default Dash; 

