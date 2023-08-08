import {useParams, useHistory} from "react-router-dom"
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/dblogs/' + id)
    const hist = useHistory()

   
    

    const handleDelete = () => {
    fetch('http://localhost:8000/dblogs/'+id,{
        method: "DELETE"
    })
    .then(() =>{
        hist.push('/')
    })
    
    }
    return (  
        <div className="blog-details">
           {isPending && <div>Loading...</div>}
           {error && <div>{error}</div>}
           {blogs && (
            <article>
                <div>{blogs.title}</div>
                <h2>Written by {blogs.author}</h2>
                <p>{blogs.body}</p>
                <button onClick = {handleDelete}>Delete</button>
            </article>
           )}
        </div>
    );
}
 
export default BlogDetails