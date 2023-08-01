import React from 'react'
import { useState, useEffect } from 'react'
import Bloglist from './Bloglist'


const Dash = () => {
  const [dBlogs, setdBlogs] = useState([
    
    {dAuthour: "Peter", dTtile: "Introduction to Meta Tags", dBody: "ajdjajdadjkads", id: 1 },
    {dAuthour: "Wale", dTtile: "About Race condition to Meta Tags", dBody: "ajdjajdadjkads", id: 2},
    {dAuthour: "John", dTtile: "The importance of well written code", dBody: "ajdjajdadjkads", id: 3},
  ])

  const [name, setName] = useState("peter")

  const handleDelete = (bId) =>{
      const newBlogs = dBlogs.filter((blog) =>blog.id !== bId) 
      setdBlogs(newBlogs)
  } 
  useEffect(()=>{
    console.log(dBlogs)
  }, [name])

  return ( 
    <div className='home'>
     <Bloglist blog = {dBlogs} name = "Major Blogs" handleDelete={handleDelete} />
     <button onClick={() => setName("Tolulope")}> Click</button>
     <p>{name}</p>
    </div>
   );
}
export default Dash; 

