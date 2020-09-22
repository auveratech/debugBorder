import React from 'react';
import '../refs/Header.css';

function Header() {
    return (
        <div className="header">
            

            <div className="header__navigation">

                <div className="header__businessName">
                    <div className="header__businessNameText">
                        <p> Quality Labs LLC. </p>
                    </div>      
                </div>
                <div className="header__option">
                    <div className="header__optionItem">
                        <p>Home</p>
                    </div>
                    <div className="header__optionItem">
                        <p>About</p>
                    </div>
                    <div className="header__optionItem">
                        <p>Contact</p>
                    </div>
                </div>
                <div className="header__option">
                    <div className="header__optionItem">
                        <p>Providers</p>
                    </div>
                    <div className="header__optionItem">
                        <p>Sign In</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
