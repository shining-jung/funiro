import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "../css/SubVisual.module.css";

const SubVisual = () => {
    const pageId = useSelector((state) => state.page.pageId);
    const pageName = useSelector((state) => state.page.pageName);
    const pathVal = useSelector((state) => state.page.pathVal);

    return (
        <section
            className={style.subVis}
            style={{
                backgroundImage: `url("${process.env.PUBLIC_URL}/img/subvis${pageId}.jpg")`,
            }}>
            <h2>{pageName}</h2>
            <Link to="/">Home</Link>
            <img src={`${process.env.PUBLIC_URL}/img/ic_subvis.svg`} alt="arrow" />
            <span>{pageName}</span>
        </section>
    );
};

export default SubVisual;
