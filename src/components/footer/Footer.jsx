import React from 'react';
import "./footer.css";
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Misha</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>
                <div className="footer__social">
                    {/* <a href="https://twitter.com/cyphrsylph" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiTwitter />
                </a> */}
                    <a href="https://www.linkedin.com/in/mishagolikov/" className="home__social-icon" target="_blank" rel="noreferrer" >
                        <FiLinkedin />
                    </a>
                    <a href="https://www.github.com/mishagolikov" className="home__social-icon" target="_blank" rel="noreferrer">
                        <FiGithub />
                    </a>

                </div>
                <span className="footer__copy"></span>
            </div>
        </footer>
    );
}

export default Footer;