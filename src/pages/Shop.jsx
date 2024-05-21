import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setPage } from "../store/pageStore";
import { fetchAPI } from "../store/itemsStore";
import SubVisual from "../components/SubVisual";
import ListItem from "../components/ListItem";
import "../css/Sub.css";

const Shop = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.items);
    const status = useSelector((state) => state.items.status);
    const totalCount = useSelector((state) => state.items.totalCount);
    let lastPage = Math.ceil(totalCount / limit);

    const changeInput = (e) => {
        setInputText(e.target.value);
    };
    const changeShow = (e) => {
        setLimit(() => {
            return Math.max(1, Math.min(20, Number(e.target.value)));
        });
    };
    const serchFn = () => {
        dispatch(fetchAPI(`?q=${inputText}`));
    };
    const goPrevPage = () => {
        setCurrentPage(currentPage - 1);
        dispatch(fetchAPI(`?_page=${currentPage - 1}&_limit=${limit}`));
    };
    const goNextPage = () => {
        setCurrentPage(currentPage + 1);
        dispatch(fetchAPI(`?_page=${currentPage + 1}&_limit=${limit}`));
    };

    useEffect(() => {
        dispatch(setPage({ pageId: 1, pageName: "Shop", pathVal: "/shop" }));
        dispatch(fetchAPI(`?_page=${currentPage}&_limit=${limit}`));
    }, [dispatch, limit]);

    if (status !== "succeeded") {
        return <div>로딩중..</div>;
    }

    return (
        <main className="shop">
            <SubVisual />
            <section className="subTopBar">
                <div className="mw">
                    <div>
                        <button className="filterBtn">Filter</button>
                        {items.length === 0 ? null : (
                            <span className="subTopInfo">
                                Showing <strong>{currentPage}</strong> – {lastPage} of {totalCount} results
                            </span>
                        )}
                    </div>
                    <div>
                        <label>
                            Show
                            <input type="number" value={limit} onChange={changeShow} />
                        </label>
                        <label>
                            Short by
                            <input type="text" placeholder="Default" onChange={changeInput} />
                        </label>
                        <button className="btn primary" onClick={serchFn}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </section>
            <section className="mw">
                {items.length === 0 ? (
                    <div>No items</div>
                ) : (
                    <ul className="listCon">
                        {items.map((product) => (
                            <li key={product.id}>
                                <ListItem items={product} />
                            </li>
                        ))}
                    </ul>
                )}
                <div className="pagiNation">
                    {currentPage === 1 || lastPage === 0 ? null : <button onClick={goPrevPage}>Prev</button>}
                    {Array.from({ length: Math.min(5, lastPage) }, (_, i) => {
                        let Num;
                        if (currentPage <= 2) {
                            Num = i + 1;
                        } else if (currentPage >= lastPage - 1) {
                            Num = lastPage - (4 - i);
                        } else {
                            Num = currentPage - 2 + i;
                        }
                        return (
                            <button
                                key={Num}
                                className={currentPage === Num ? "active" : ""}
                                onClick={() => {
                                    setCurrentPage(Num);
                                    dispatch(fetchAPI(`?_page=${Num}&_limit=${limit}`));
                                }}>
                                {Num}
                            </button>
                        );
                    })}
                    {currentPage === lastPage || lastPage === 0 ? null : <button onClick={goNextPage}>Next</button>}
                </div>
            </section>
        </main>
    );
};

export default Shop;
