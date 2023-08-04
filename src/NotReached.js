import { Link } from "react-router-dom"

const NotReached = () => {
    return (  
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page doesn't exist</p>
            <Link to = "/"></Link>
        </div>
    );
}
 
export default NotReached;