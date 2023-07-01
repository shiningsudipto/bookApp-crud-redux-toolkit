import { Link } from "react-router-dom";

const NavMenu = () => {
    return (
        <div>
            <header>
                <ul>
                    <li><Link className="navLink" to='/'>Home</Link></li>
                    <li><Link className="navLink" to='/addbook'>Add A Book</Link></li>
                    <li><Link className="navLink" to='/allbooks'>All Books</Link></li>
                </ul>
            </header>
        </div>
    );
};

export default NavMenu;