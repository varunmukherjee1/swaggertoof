import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import ReactPlayer from 'react-player'

import classes from "./styles/Videos.module.css";
import "swiper/css";
import "swiper/css/navigation";

const Videos = () => {

    // Append Video Links in vidArr array

    const vidArr = [
        "https://www.youtube.com/watch?v=xITzw_bRziY",
        "https://www.youtube.com/watch?v=hvPyXsg4Oe4",
        "https://www.youtube.com/watch?v=s_fWEqYIYx8",
        "https://www.youtube.com/watch?v=HEf_xrgmuRI",
        "https://www.youtube.com/watch?v=3Kf-FlECN7M",
        "https://www.youtube.com/watch?v=4UacBYEo4Oc"
    ]

    return (
        <div id = "Videos" className={classes.section}>

            <Swiper
                cssMode={true}
                navigation={true}
                scrollbar={{ draggable: true }}
                modules={[Navigation]}
                spaceBetween={0}
                centeredSlides = {true}
                breakpoints={{
                    400: {
                        width: 400,
                        slidesPerView: 1
                    },
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    700: {
                        width: 700,
                        slidesPerView: 1.2,
                      },
                    1210: {
                      width: 1360,
                      slidesPerView: 1.8,
                    },
                  }}
                >
                {vidArr.map((vid,idx) => (
                    <SwiperSlide key = {idx}>
                        <ReactPlayer 
                            url={vid}
                            key = {idx}
                            controls = {true}
                            className = {classes.card}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default Videos;