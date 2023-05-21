import React from "react";
import { Link } from "react-router-dom";
import zoomer from "../images/zoomer.png"
import ee from "../images/ee.png"
import quotess from "../images/icons/quote-left.svg"

const AboutUs = () => {
  return (
    <div className="container">
      <div className="pages-anchor">
        <Link to="/">Home</Link>
        <span>{`>`}</span>
        <Link to="/about">About Us</Link>
      </div>
      <div className="page__title titles-margin regular" style={{marginTop: "19px"}}>About us</div>
      <div className="row">
        <div className="col-lg-12">
          <div className="about-page__context">
            <h1
              className="about-page__context--title about-page__context--our-mission bold"
            >
              OUR MISSION
            </h1>
            <div className="d-flex align-items-start break-blocks">
              <img
                src={quotess}
                alt="quotess"
                className="about-page__context--icon"
              />
              <div className="about-page__context--desc italic about-us-text-box">
                The NES classNameic Edition system is a miniaturized version of the
                groundbreaking NES, originally released in 1985. Just plug the
                NES classNameic Edition into your TV, pick up that gray controller,
                and rediscover the joy of NES games.
              </div>
            </div>
          </div>
          <h1
            className="about-page__context--title bold about-us-titles titles-margin"
          >
            We are …
          </h1>
          <div className="about-page__context--desc about-us-blocks-text">
            <p>
              The NES classNameic Edition system is a miniaturized version of the
              groundbreaking NES, originally released in 1985. Just plug the NES
              classNameic Edition into your TV, pick up that gray controller, and
              rediscover the joy of NES games.
            </p>

            <p>
              Play NES games the way they’re meant to be played—with a full-size
              «original» controller.
            </p>
            <p>
              The included NES classNameic Controller can also be used with NES
              Virtual Console games on your Wii™ or Wii U™ console by connecting
              it to a Wii Remote™ controller.
            </p>

            <p>
              Pick up right where you left off with four Suspend Point slots for
              each game. Just press the Reset button while playing to return to
              the HOME menu and save your progress to a slot. Have a perfect run
              going? You can lock your save file and resume at a later time so
              there’s no danger of losing your progress.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 about-us-social-program-items">
              <div className="about-page__context about-us-social-program-box">
                <h1 className="about-page__context--title bold">Social Programs</h1>
                <h1 className="about-page__context--big-title bold">
                  Buy and help
                </h1>
                <div className="about-page__context--desc regular">
                  The NES classNameic Edition system is a miniaturized version of
                  the groundbreaking NES, originally released in 1985. Just plug
                  the NES classNameic Edition into your TV, pick up that gray
                  controller, and rediscover the joy of NES games. Play NES
                  games the way they’re meant to be played—with a full-size
                  «original» controller. The included NES classNameic Controller can
                  also be used with NES Virtual Console games on your Wii™ or
                  Wii U™ console by connecting it to a Wii Remote™ controller.
                  Pick up right where you left off with four Suspend Point slots
                  for each game. Just press the Reset button while playing to
                  return to the HOME menu and save your progress to a slot. Have
                  a perfect run going? You can lock your save file and resume at
                  a later time so there’s no danger of losing your progress.
                </div>
              </div>
            </div>
            <div className="col-lg-4 about-us-social-program-items">
              <div className="about-page__context about-us-social-program-box">
                <h1 className="about-page__context--title bold">Charity</h1>
                <h1 className="about-page__context--big-title bold">Donate</h1>
                <div className="about-page__context--desc regular">
                  The NES classNameic Edition system is a miniaturized version of
                  the groundbreaking NES, originally released in 1985. Just plug
                  the NES classNameic Edition into your TV, pick up that gray
                  controller, and rediscover the joy of NES games. Play NES
                  games the way they’re meant to be played—with a full-size
                  «original» controller. The included NES classNameic Controller can
                  also be used with NES Virtual Console games on your Wii™ or
                  Wii U™ console by connecting it to a Wii Remote™ controller.
                  Pick up right where you left off with four Suspend Point slots
                  for each game. Just press the Reset button while playing to
                  return to the HOME menu and save your progress to a slot. Have
                  a perfect run going? You can lock your save file and resume at
                  a later time so there’s no danger of losing your progress.
                </div>
              </div>
            </div>
            <div className="col-lg-4 about-us-social-program-items">
              <div className="about-page__context about-us-social-program-box">
                <h1 className="about-page__context--title bold">Charity</h1>
                <h1 className="about-page__context--big-title bold">Donate</h1>
                <div className="about-page__context--desc regular">
                  The NES classNameic Edition system is a miniaturized version of
                  the groundbreaking NES, originally released in 1985. Just plug
                  the NES classNameic Edition into your TV, pick up that gray
                  controller, and rediscover the joy of NES games. Play NES
                  games the way they’re meant to be played—with a full-size
                  «original» controller. The included NES classNameic Controller can
                  also be used with NES Virtual Console games on your Wii™ or
                  Wii U™ console by connecting it to a Wii Remote™ controller.
                  Pick up right where you left off with four Suspend Point slots
                  for each game. Just press the Reset button while playing to
                  return to the HOME menu and save your progress to a slot. Have
                  a perfect run going? You can lock your save file and resume at
                  a later time so there’s no danger of losing your progress.
                </div>
              </div>
            </div>
          </div>
          <h1
            className="about-page__context--title bold d-lg-block about-us-titles"
            style={{marginBottom: "38px"}}
          >
            Our partners
          </h1>
          <ul className="ourshop d-flex">
            <li className="ourshop__item">
              <Link to="/" className="ourshop__item--link">
                <img
                  src={ee}
                  alt=""
                  className="ourshop__item--img"
                />
              </Link>
            </li>
            <li className="ourshop__item">
              <Link to="/" className="ourshop__item--link">
                <img src={zoomer} alt="" className="ourshop__item--img" />
              </Link>
            </li>
            <li className="ourshop__item">
              <Link to="/" className="ourshop__item--link">
                <img
                  src={ee}
                  alt=""
                  className="ourshop__item--img"
                />
              </Link>
            </li>
            <li className="ourshop__item">
              <Link to="/" className="ourshop__item--link">
                <img src={zoomer} alt="" className="ourshop__item--img" />
              </Link>
            </li>
            <li className="ourshop__item">
              <Link to="/" className="ourshop__item--link">
                <img
                  src={ee}
                  alt=""
                  className="ourshop__item--img"
                />
              </Link>
            </li>
            <li className="ourshop__item">
              <Link to="/" className="ourshop__item--link">
                <img src={zoomer} alt="" className="ourshop__item--img" />
              </Link>
            </li>
          </ul>
          <div style={{display: "flex", justifyContent: "center"}}>
            <button className="load-more-shop-items">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
