

import classes from "./styles/About.module.css";

const About = () => {
    return (
        <div id = "About" className={classes.section}>
            
            <div className={classes.head}>
                <p>Matt Damon once bought a zoo. He failed.</p>
                <p>We Bought a Skull</p>
            </div>

            <div className={classes.body}>
                <p>
                    Mauris volutpat, orci efficitur aliquam auctor, erat neque euismod purus, et interdum sapien nulla nec mi. Pellentesque ut lorem ac nulla fermentum vulputate sed at eros. Maecenas sed dolor felis. Sed vitae odio vulputate, vehicula lorem vestibulum, tristique lacus. Praesent ac pellentesque augue. Mauris mauris elit, dignissim et hendrerit ut, ullamcorper non turpis. Suspendisse sit amet aliquet turpis. Ut ac arcu libero. Integer vehicula vulputate turpis, et commodo erat pulvinar non. Nulla a maximus mauris.

                </p>
                <p>
                    In laoreet tempus sodales. Donec ut posuere leo. Suspendisse porta tellus vitae urna egestas lacinia. Nunc justo mi, lacinia in risus ac, lobortis auctor augue. Nunc sed dapibus dui. Cras eget malesuada arcu. Aliquam accumsan varius quam, eu semper sapien porttitor dapibus. Duis dictum erat sit amet tellus porta, nec commodo ligula varius. Cras id eleifend enim. Vivamus porta euismod eros, ac condimentum urna posuere vitae. Aenean laoreet sollicitudin nisl in malesuada. Sed eu egestas felis, sed rhoncus ligula. Mauris eget vestibulum quam.
                </p>
            </div>

            <div className={classes.end}>
                Got Toof?
            </div>

        </div>
    );
}

export default About;