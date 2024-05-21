import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { fetchAPI } from "../store/itemsStore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MainList = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.items);
    const status = useSelector((state) => state.items.status);

    useEffect(() => {
        dispatch(fetchAPI("?_end=8"));
    }, [dispatch]);

    if (status !== "succeeded") {
        return <div>로딩중..</div>;
    }

    return (
        <section className="mainList">
            <h2>Our Products</h2>
            <ul className="listCon">
                {items.map((product) => {
                    return (
                        <li key={product.id}>
                            <ListItem items={product} />
                        </li>
                    );
                })}
            </ul>
            <Link to="/" className="btn secondary">
                Show More
            </Link>
        </section>
    );
};

export default MainList;
