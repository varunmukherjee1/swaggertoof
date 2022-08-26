import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import classes from "./styles/Team.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import au from "../Assets/Images/Au.png"
import da from "../Assets/Images/Da.png"
import dr from "../Assets/Images/dr.png"
import va from "../Assets/Images/Va.png"
import br from "../Assets/Images/Br.png"

const Team = () => {

    const team = [
        {
            name: "Daniel Preus",
            img: da,
            position: "Co-founder & COO",
            facebook: "https://www.google.com/",
            linkedIn: "https://www.google.com/",
            twitter: "https://www.google.com/"
        },
        {
            name: "Aubrey",
            img: au,
            position: "CTO & Designer",
            facebook: "https://www.google.com/",
            linkedIn: "https://www.google.com/",
            twitter: "https://www.google.com/"
        },
        {
            name: "Varsha",
            img: va,
            position: "CTO & Artist",
            facebook: "https://www.google.com/",
            linkedIn: "https://www.google.com/",
            twitter: "https://www.google.com/"
        },
        {
            name: "Dianne Russell",
            img: dr,
            position: "Sr.Backend Developer",
            facebook: "https://www.google.com/",
            linkedIn: "https://www.google.com/",
            twitter: "https://www.google.com/"
        },
        {
            name: "Dianne Russell",
            img: br,
            position: "Sr.Backend Developer",
            facebook: "https://www.google.com/",
            linkedIn: "https://www.google.com/",
            twitter: "https://www.google.com/"
        }
    ];

    const teamArr = team.map((user) => (
        <div className={classes.card} style = {{backgroundImage:`url(${user.img})`}}>

            <div className = {classes.content}>
                <p className={classes.name}>{user.name}</p>
                <p className = {classes.pos}>{user.position}</p>
                <div className = {classes.links}>
                    <a href={user.facebook} target = "_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href={user.linkedIn} target = "_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href={user.twitter} target = "_blank"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
    ));

    return (
        <div id = "Team" className={classes.section}>
            <div className={classes.headContent}>
                <div className={classes.text}>
                    <p>Executive Team</p>
                    <p>our team player always finds effective ways to <br></br> improve the product and process</p>
                </div>

                <Swiper
                    cssMode={true}
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    modules={[Navigation]}
                    spaceBetween={0}
                    breakpoints={{
                        400: {
                            width: 400,
                            slidesPerView: 1.4
                        },
                        640: {
                          width: 640,
                          slidesPerView: 2.2,
                        },
                        1000: {
                            width: 1000,
                            slidesPerView: 3.5,
                          },
                        2000: {
                          width: 2000,
                          slidesPerView: 5.2,
                        },
                      }}
                >
                    {teamArr.map((team,idx) => (<SwiperSlide key = {idx}>{team}</SwiperSlide>))}
                </Swiper>
            </div>
        </div>
    );
}

export default Team;