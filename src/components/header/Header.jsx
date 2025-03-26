import React, { useState, useEffect } from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, 
    HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineMail, 
    HiX, HiOutlineMenu, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const getInitialTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark-theme";
        } else {
            return "light-theme";
        }
    };

    const [theme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
        setTheme(newTheme);
    };

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">Portfolio</Link>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/" onClick={() => setActiveNav("#home")}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon" />Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/about" onClick={() => setActiveNav("#about")}
                                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineUser className="nav__icon" />About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <a href="/skills" onClick={() => setActiveNav("#skills")}
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon" />Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/qualification" onClick={() => setActiveNav("#qualification")}
                                className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineClipboardList className="nav__icon" />Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/portfolio" onClick={() => setActiveNav("#portfolio")}
                                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon" />Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/contact" onClick={() => setActiveNav("#contact")}
                                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon" />Contact
                            </a>
                        </li>
                        <li className="nav__item">
                            <button onClick={toggleTheme} className="nav__theme">
                                {theme === "light-theme" ? (
                                    <HiOutlineSun className="nav__theme__icon"></HiOutlineSun>
                                ) : (
                                    <HiOutlineMoon className="nav__theme__icon"></HiOutlineMoon>
                                )}
                            </button>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header;