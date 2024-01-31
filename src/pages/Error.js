import { NavLink } from "react-router-dom";
const Error=()=>{
    return(
        <div>
            <h2>404 Page not found</h2>
            <div className="btns">
                <NavLink to="/">Return Home</NavLink> <br />
                <NavLink to="/contact">Report problem</NavLink>
            </div>
        </div>
    )
}
export default Error;