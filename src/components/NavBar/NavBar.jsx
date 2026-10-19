import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";


const NavBar = () => {

    const { user, signInOut } = useContext(AuthContext);


    const handleSignOut = () => {
        signInOut().then(err => console.log(err))
    }



    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='register'>Register</NavLink></li>
        <li>
            <NavLink to='createProducts'>
                Create Prducts
            </NavLink>
        </li>
        <li>
            <NavLink to='allProducts'>
                All Products
            </NavLink>
        </li>
        <li>
            {
                user && <NavLink to='myProducts'>
                    My Products
                </NavLink>
            }
        </li>

    </>





    return (
        <div>
            <div className="navbar bg-black text-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">MegaMart</a>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-5 whitespace-nowrap">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <button
                            className="btn"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    ) : (
                        <NavLink to="/login">
                            <button className="btn">Login</button>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;