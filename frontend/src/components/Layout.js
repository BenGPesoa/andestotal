import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Banner from "./layout/Banner";
import Marquee from "./layout/Marquee";

function Layout(props) {
    return (
        <div>
            <Marquee />
            <Header />
            <Nav />
            <Banner />    
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;