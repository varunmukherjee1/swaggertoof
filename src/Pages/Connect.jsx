import classes from "./styles/Connect.module.css"

const Connect = () => {

    return (
        <div id = "Connect" className={classes.section}>

            <a href="#">Join Our Discord</a>


            {/* Add required links in <a> tags </a> */}

            <div className={classes.links}>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-discord"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            </div>

        </div>
    );
}

export default Connect;