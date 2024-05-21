import { Link } from "react-router-dom";
import style from "../css/Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <h1>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
                </Link>
            </h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </nav>
            <div>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/img/ic_user.svg`} alt="logo" />
                </Link>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/img/ic_search.svg`} alt="logo" />
                </Link>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/img/ic_heart.svg`} alt="logo" />
                </Link>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/img/ic_cart.svg`} alt="logo" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
