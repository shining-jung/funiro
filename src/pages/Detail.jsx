import React from "react";

const Detail = () => {
    return (
        <main>
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
        </main>
    );
};

export default Detail;
