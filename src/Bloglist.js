import React from "react";

const Bloglist = ({blog, name}) => {
// const blog = props.blog

    return (  
        <div className='blog-list'>
            <h2>{name}</h2>
        {blog.map((blog) => (    
           <div className="blog-preview" key = {blog.id}>
                   <h2>{blog.title}</h2>
                   <p>{blog.author}</p>
                   
           </div>
    
        ))}
    </div>
    );
}
 
export default Bloglist;