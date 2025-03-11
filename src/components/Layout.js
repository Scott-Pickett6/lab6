import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function Layout(){
    return (
        <div>
            <Header />
            <div style={{marginTop: "22vh"}}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;