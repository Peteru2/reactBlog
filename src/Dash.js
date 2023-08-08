import React from 'react'
import Bloglist from './Bloglist'
import useFetch from './useFetch'
import { useEffect } from 'react'


const Dash = () => {
const {data:dBlogs, isPending, error}  = useFetch("http://localhost:8000/dblogs")
const dat = dBlogs

const local = localStorage.setItem('name',JSON.stringify(dat) )

useEffect(() =>{
    let dat = localStorage.getItem('name')

},[dat])

  return ( 
    <div className='home'>
      {error && <div>{error}</div>}
      { isPending && <div style={{textAlign: "left"}}>Loading...</div>}
     {dBlogs && <Bloglist blog = {dat} name = "Major Blogs"  />}
    </div>
   );
}
export default Dash; 

