import style from "../css/ListItem.module.css";

const ListItem = ({ items }) => {
    const setPrice = (Number(items.price) * (1 - items.discount / 100)).toLocaleString();
    const itemPrice = Number(items.price).toLocaleString();
    const goDetail = () => {
        alert("준비중");
    };

    return (
        <div className={style.listItem}>
            <div className={style.thum}>
                <img src={`${process.env.PUBLIC_URL}/img/${items.img}`} alt={items.name} />
                <div className={style.onArea}>
                    <button>Add to cart</button>
                    <button>
                        <img src={`${process.env.PUBLIC_URL}/img/ic_share.svg`} alt="icon Share" />
                        Share
                    </button>
                    <button>
                        <img src={`${process.env.PUBLIC_URL}/img/ic_compare.svg`} alt="icon Compare" />
                        Compare
                    </button>
                    <button>
                        <img src={`${process.env.PUBLIC_URL}/img/ic_like.svg`} alt="icon Like" />
                        Like
                    </button>
                </div>
            </div>
            <div className={style.info} onClick={goDetail}>
                <strong>{items.name}</strong>
                <p>{items.des}</p>
                <span className={style.setPrice}>{setPrice}￦</span>
                {items.discount === "0" ? null : <span className={style.itemPrice}>{itemPrice}￦</span>}
            </div>
            {items.discount === "0" ? (
                <div className={style.bullet}>
                    <span className={style.itemCate}>{items.category}</span>
                </div>
            ) : (
                <div className={style.bullet}>
                    <span className={style.itemCate}>{items.category}</span>
                    <span className={style.itemDiscount}>-{items.discount}%</span>
                </div>
            )}
        </div>
    );
};

export default ListItem;
