import React from 'react';
import '../refs/Body.css';

import landingImage from '../imgs/18429.jpg';
import cardOne from '../imgs/1693.jpg';
import cardTwo from '../imgs/1254.jpg';
import cardThree from '../imgs/3465642.jpg';
import cardFour from '../imgs/647.jpg';
import cardFive from '../imgs/5547.jpg';


function Body() {
    return (
        <div className="body">
            <div className="body__landingImage">
                <img src={landingImage} alt="" />
            </div>

            <div className="body__banner">
                <div className="body__bannerText">
                    <h1>Where Accuracy and Precision Meet.</h1>
                </div>
            </div>

            <div className="body__row">
                <div className="body__rowContainer">
                    <div className="body__rowContainerCard cardOne">
                        <img src={cardOne} alt="" />
                        <p>State-of-the-Art Equipment</p>
                    </div>
                </div>
                <div className="body__rowContainer">
                    <div className="body__rowContainerCard cardTwo">
                        <img src={cardTwo} alt="" />
                    </div>
                </div>
                <div className="body__rowContainer">
                    <div className="body__rowContainerCard cardThree">
                        <img src={cardThree} alt="" />
                    </div>
                </div>
                <div className="body__rowContainer">
                    <div className="body__rowContainerCard cardFour">
                        <img src={cardFour} alt="" />
                    </div>
                </div>
                <div className="body__rowContainer">
                    <div className="body__rowContainerCard cardFive">
                        <img src={cardFive} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Body
