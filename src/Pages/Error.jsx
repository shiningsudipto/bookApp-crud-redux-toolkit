import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Error;