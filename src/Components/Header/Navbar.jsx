import React from "react";
import {navbarData} from "./Navbar.dt";
import {CartImage, LogoLeft} from "../ComponentsHelpers/Sprites";
import useFixed from "../../hooks/useFixed.hook";
import {NavLink} from "react-router-dom";
import Button from "../Button";
import {useSelector} from "react-redux";
import {useScrollTopMenu} from "../../hooks/scrollMenu.hook";


const Navbar = () => {

    const {fixed} = useFixed()
    const {handleOffset, activeLi} = useScrollTopMenu()



    return (
        <div className={fixed ? "navbar fixed" : "navbar"}>
            <div className="container">
                <nav  className="navbar__inner">
                    <ul className={fixed && "fixed"}>
                        <LogoLeft className="logo__left" />
                        <div className="navbar__items">
                            <div id="scrollUl"  className="navbar__items--animate">
                                {navbarData.map(({id, title}, index) => {
                                    return <li key={`nav-${id}`}
                                               className={title === activeLi && "activeLi"}
                                               onClick={() => handleOffset(title)}
                                    >
                                        {title}
                                    </li>
                                })}
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar