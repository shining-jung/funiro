import MainVisual from "../components/MainVisual";
import MainTypeItem from "../components/MainTypeItem";
import MainList from "../components/MainList";
import "../css/Main.css";

const Main = () => {
    return (
        <main>
            <MainVisual />
            <MainTypeItem />
            <MainList />
        </main>
    );
};

export default Main;
