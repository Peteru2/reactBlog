import { useState } from "react";

const Todo = () => {
   
        const [title, setTitle] = useState('');

    return ( 
        <form >
        <div>
            <label >Title</label>
            <input 
                type="text" 
                placeholder="The Titke"
                value={title}
                onChange={(e) => setTitle(e.target.value)}              
            />
        </div>
        <div>
            <label >The body</label>
            <textarea >

            </textarea>
        </div>
        <div>
            <label >Author</label>
            <select >
                <option value="Peter">Peter</option>
                <option value="Wale">Wale</option>
            </select>
        </div>
        <h2>{title}</h2>
    </form>
     );
}
 
export default Todo;