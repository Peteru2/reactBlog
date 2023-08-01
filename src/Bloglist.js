import React from "react";

const Bloglist = ({blog, name, handleDelete}) => {
// const blog = props.blog

    return (  
        <div className='blog-list'>
            <h2>{name}</h2>
        {blog.map((blog) => (    
           <div className="blog-preview" key = {blog.id}>
                   <h2>{blog.dTtile}</h2>
                   <p>{blog.dAuthour}</p>
                   <button onClick={() => (handleDelete(blog.id) )}>Delete</button>
           </div>
    
        ))}
    </div>
    );
}
 
export default Bloglist;