import React from "react";
import {Link} from 'react-router-dom'
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Yaser Resturant</h2>
                    <h3>Jeddah</h3>
                    <p>We are family owned Yaser Restaurant, focused on traditional recipes servred with a modern twist. </p>
                    <Link to="/booking"><button aria-label='on Click'>Reserve Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImg} alt="banner"/>
                </div>
            </section>
        </header>
        
    );
};

export default Header;
