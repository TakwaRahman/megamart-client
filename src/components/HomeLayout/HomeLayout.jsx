import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";


const HomeLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </header>
        </div>
    );
};

export default HomeLayout;