import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";


import classes from "./styles/Social.module.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../Assets/Images/Rectangle 11.png";
import img2 from "../Assets/Images/Rectangle 12.png";

const Social = () => {

    // Append social elements in content array

    const content = [
        img1,
        img2,
        img1,
        img2,
        img1,
        img2,
        img1,
        img2
    ]

    return (
        <div id = "Social" className={classes.section}>

            <Swiper
                cssMode={true}
                navigation={true}
                scrollbar={{ draggable: true }}
                // pagination={true}
                // mousewheel={true}
                // keyboard={true}
                modules={[Navigation]}
                spaceBetween={0}
                breakpoints={{
                    400: {
                        width: 400,
                        slidesPerView: 1
                    },
                    640: {
                      width: 640,
                      slidesPerView: 1.2,
                    },
                    1000: {
                        width: 1000,
                        slidesPerView: 2.5,
                      },
                    2000: {
                      width: 2000,
                      slidesPerView: 3.5,
                    },
                  }}
            >
                {content.map((item,id) => (
                    <SwiperSlide>
                        <div 
                            key = {id}
                            className={classes.card} 
                        >
                            <img src={item} alt="Not found" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    );
}

export default Social;