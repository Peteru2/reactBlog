import React from 'react'
import Bloglist from './Bloglist'
import useFetch from './useFetch'


const Dash = () => {
const {data:dBlogs, isPending, error}  = useFetch("http://localhost:8000/dblogs")
  return ( 
    <div className='home'>
      {error && <div>{error}</div>}
      { isPending && <div style={{textAlign: "left"}}>Loading...</div>}
     {dBlogs && <Bloglist blog = {dBlogs} name = "Major Blogs"  />}
    </div>
   );
}
export default Dash; 

