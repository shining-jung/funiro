import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MainVisual = () => {
    return (
        <section className="MainVis">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                effect={"fade"}
                navigation={true}
                loop={true}
                modules={[EffectFade, Pagination, Navigation]}
                className="MainVisSlide">
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/mainvis01.jpg"})`,
                    }}>
                    <div className="description">
                        <span>New Arrival</span>
                        <h2>Discover Our New Collection</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <Link to="/" className="btn primary">
                            BUY Now
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/mainvis02.jpg"})`,
                    }}>
                    <div className="description">
                        <span>New Arrival</span>
                        <h2>Discover Our New Collection</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <Link to="/" className="btn primary">
                            BUY Now
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default MainVisual;
