import React, {useState} from "react";
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
    // const [activeLi, setActiveLi] = useState(null)
    const {totalPrice, totalCount} = useSelector(({cart}) => cart)
    // const handleActiveLi = (index) => {
    //     setActiveLi(index)
    // }

    return (
        <div className={fixed ? "navbar fixed" : "navbar"}>
            <div className="container">
                <nav className="navbar__inner">
                    <ul className={fixed && "fixed"}>
                        <LogoLeft className="logo__left" />
                        {navbarData.map(({id, title}, index) => {
                            return <li key={`nav-${id}`}
                                       className={title === activeLi && "activeLi"}
                                       onClick={() => handleOffset(title)}
                            >
                                {title}
                            </li>
                        })}
                    </ul>

                    <div className="navbar__cart">
                        <NavLink to="/cart">
                            <Button  className="button--cart">
                                <span>{totalPrice} &#8381;</span>
                                <div className="button__delimiter"></div>
                               <CartImage />
                                <span>{totalCount}</span>
                            </Button>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar