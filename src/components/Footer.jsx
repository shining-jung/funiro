import { Link } from "react-router-dom";

import style from "../css/Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>
                <strong>Funiro.</strong>
                <p>
                    400 University Drive Suite 200 Coral Gables,
                    <br /> FL 33134 USA
                </p>
            </div>
            <nav>
                <span>Links</span>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </nav>
            <nav>
                <span>Help</span>
                <Link to="/">Payment Options</Link>
                <Link to="/">Returns</Link>
                <Link to="/">Privacy Policies</Link>
            </nav>
            <div>
                <span>Newsletter</span>
                <input type="text" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
            </div>
            <p>2023 furino. All rights reverved</p>
        </footer>
    );
};

export default Footer;
