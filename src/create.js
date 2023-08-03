import { useState } from "react"
import {useHistory} from "react-router-dom"

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Peter');
    const [isPending, setIsPending] = useState(false)
    const hist = useHistory()

    const handleSubmit = (e) => {

        e.preventDefault();
        setIsPending(true)

        const blog =  { title, body, author };

        fetch('http://localhost:8000/dblogs',{
            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log("Added")
            setIsPending(false)
            hist.push('/')
        })
    }


    return ( 
        <div className="create">
            <h1>Add New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label htmlFor="">Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label htmlFor="">Author</label>
               <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
               >
                    <option value="Peter">Peter</option>
                    <option value="Josh">Josh</option>

               </select>
               { !isPending && <button> Add blog</button> }
               { isPending &&<button> Adding Blog... </button> }
            

             
            </form>
        </div>
     );
}
 
export default Create;