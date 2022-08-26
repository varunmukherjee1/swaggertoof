import classes from "./styles/HeroSec.module.css"

const Home = () => {

    return (
        <div id = "Home" className={classes.section}>
            <div className={classes["img-container"]}>
                <img src={require("../Assets/Images/tempBossImg.png")} alt="not found" />
            </div>

        </div>
    );
}

export default Home;