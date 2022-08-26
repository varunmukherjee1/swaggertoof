import { Link } from "react-scroll";

import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className = {classes.container}>
            <nav className = {classes.navbar}>
                <ul>
                    <li className = {classes.navItem}>
                        <Link 
                            to = "Home" 
                            activeClass = {classes.active}
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={500}
                            isDynamic={true}
                            hashSpy={true}
                            spyThrottle={0}
                        >
                            <div className= {classes.fill}></div>
                            <div className = {classes.text}>Home</div>
                        </Link>
                            
                    </li>
                    <li className = {classes.navItem}>
                        <Link 
                            to = "About" 
                            activeClass = {classes.active}
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={500}
                            isDynamic={true}
                            hashSpy={true}
                            spyThrottle={0}
                        >
                            <div className= {classes.fill}></div>
                            <div className = {classes.text}>About</div>
                        </Link>
                            
                    </li>
                    <li className = {classes.navItem}>
                        <Link 
                            to = "Videos" 
                            activeClass = {classes.active}
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={500}
                            isDynamic={true}
                            hashSpy={true}
                            spyThrottle={0}
                        >
                            <div className= {classes.fill}></div>
                            <div className = {classes.text}>Videos</div>
                        </Link>
                            
                    </li>
                    <li className = {classes.navItem}>
                        <Link 
                            to = "Team" 
                            activeClass = {classes.active}
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={500}
                            isDynamic={true}
                            hashSpy={true}
                            spyThrottle={0}
                        >
                            <div className= {classes.fill}></div>
                            <div className = {classes.text}>Team</div>
                        </Link>
                            
                    </li>
                    <li className = {classes.navItem}>
                        <Link 
                            to = "Roadmap" 
                            activeClass = {classes.active}
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration={500}
                            isDynamic={true}
                            hashSpy={true}
                            spyThrottle={0}
                        >
                            <div className= {classes.fill}></div>
                            <div className = {classes.text}>Roadmap</div>
                        </Link>
                            
                    </li>
                    <li className = {classes.navItem}>
                        <Link 
                            to = "Social" 
                            activeClass = {classes.active}
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={500}
                            isDynamic={true}
                            hashSpy={true}
                            spyThrottle={0}
                        >
                            <div className= {classes.fill}></div>
                            <div className = {classes.text}>Social</div>
                        </Link>
                            
                    </li>
                    <li className = {classes.navItem}>
                        <Link 
                            to = "Connect" 
                            activeClass = {classes.active}
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={500}
                            isDynamic={true}
                            hashSpy={true}
                            spyThrottle={0}
                        >
                            <div className= {classes.fill}></div>
                            <div className = {classes.text}>Connect</div>
                        </Link>
                            
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;