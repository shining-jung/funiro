import { Link } from "react-router-dom";

const MainTypeItem = () => {
    return (
        <section className="mainTypeItem">
            <h2>Browse The Range</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/img/maintype1.jpg`} alt="Dining" />
                <span>Dining</span>
            </Link>
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/img/maintype2.jpg`} alt="Living" />
                <span>Living</span>
            </Link>
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/img/maintype3.jpg`} alt="Bedroom" />
                <span>Bedroom</span>
            </Link>
        </section>
    );
};

export default MainTypeItem;
