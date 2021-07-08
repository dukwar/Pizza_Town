import React from "react";
import Button from "../Button";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {CartImage, LogoHeader} from "../ComponentsHelpers/Sprites";


const Header = () => {

    const {totalPrice, totalCount} = useSelector(({cart}) => cart)

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__data">
                        <NavLink to="/">
                            <div className="header__logo">
                                <LogoHeader className="header__logo--img" />
                            </div>
                        </NavLink>
                        <div className="header__data--town">
                            <p>Доставка пиццы</p>
                            <p>Владимир</p>
                        </div>
                        <div className="header__data--telephone">
                            <p>8 800 302-00-60</p>
                            <p>Звонок бесплатный</p>
                        </div>
                    </div>

                    <div className="header__profile">


                        {/*<Button className="button--profile">*/}
                        {/*    Войти*/}
                        {/*</Button>*/}
                        <div className="navbar__cart">
                            <NavLink to="/cart">
                                <Button className="button--cart">
                                    <span>{totalPrice} &#8381;</span>
                                    <div className="button__delimiter"></div>
                                    <CartImage />
                                    <span>{totalCount}</span>
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header