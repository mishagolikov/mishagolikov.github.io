import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const calculateYearsSince = (startDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const diffInMilliseconds = now - start;
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffInYears * 2) / 2;
};

const Info = () => {
  const experienceYears = calculateYearsSince('2023-06-01');

  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">{experienceYears} years</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">35+ Projects</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  );
}

export default Info;