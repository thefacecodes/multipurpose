import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import bannerImage from "./assets/files/multis.jpg";
import music from "./assets/files/music.jpg";
import video from "./assets/files/videos.jpg";
import books from "./assets/files/books.jpg";
import community from "./assets/files/community.jpg";
import newsImage from "./assets/files/news.jpg";
import why from "./assets/files/multitask.jpg";

function Home() {
  const style = {
    padding: "1em 2em",
    fontSize: "1.3em",
    color: "white",
    background: "#2b6cb3",
    textDecoration: "none",
    borderRadius: "2em",
  };

  useEffect(() => {
    AOS.init({
      // useClassNames: true,
      animatedClassName: "aos-animate",
      disable: false,
      startEvent: "DOMContentLoaded",
      duration: 400,
      initClassName: "aos-init",
      delay: 50,
      easing: "ease",
      once: false,
      offset: 120,
      mirror: true,
      disableMutationObserver: false,
      anchorPlacement: "top-bottom",
      throttleDelay: 99,
      // initClassName: false,
      // animatedClassName: "animated",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="content">
      <nav data-aos="zoom-out-down">
        <h1>The Face Multi-purpose App</h1>
        <Link style={style} to="/learn">
          Get Started
        </Link>
      </nav>
      <div className="banner">
        <div className="hero" data-aos="fade-right">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("The Face multi-purpose app.")
                  // .callFunction(() => {
                  //   console.log("String typed out!");
                  // })
                  .pauseFor(2500)
                  .deleteAll()
                  // .callFunction(() => {
                  //   console.log("All strings were deleted");
                  // })

                  .typeString("One stop Multi-purpose app.")

                  .start();
              }}
            />
          </h1>
          <p>
            Your favorite people, music, videos, books and latest news all in
            one place.
          </p>
          <Link style={style} to="/learn">
            Learn More
          </Link>
        </div>
        <img src={bannerImage} alt="" />
      </div>
      <div className="features" data-aos="fade-up-right">
        <h2>Features</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          ullam, magnam doloribus ea quod fugit atque corporis dolore eveniet
          ipsam?
        </p>

        <div className="featurelists">
          <div className="feature">
            <img src={music} alt="" />
            <div>
              <h3>Music</h3>
            </div>
          </div>
          <div className="feature">
            <img src={video} alt="" />
            <div>
              <h3>Video</h3>
            </div>
          </div>
          <div className="feature">
            <img src={books} alt="" />
            <div>
              <h3>Books</h3>
            </div>
          </div>
          <div className="feature">
            <img src={community} alt="" />
            <div>
              <h3>Community</h3>
            </div>
          </div>
          <div className="feature">
            <img src={newsImage} alt="" />
            <div>
              <h3>News</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="why-us">
        <h3>Why choose us ?</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam sit
          earum, facilis quidem soluta deserunt quisquam harum quae aliquid
          iure?
        </p>
        <div>
          <img src={why} alt="" />

          <ol className="reasons">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              voluptates cum facere?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              voluptates cum facere?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              voluptates cum facere?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              voluptates cum facere?
            </li>
          </ol>
        </div>
      </div>
      <footer>
        <h4>The Face Multipurpose App</h4>
        <ol>
          <li>About</li>
          <li>Contact</li>
          <li>Q and A</li>
          <li>Privacy Policy</li>
        </ol>
        <ol>
          <li>Resources</li>
          <li>Terms and Condition</li>
          <li>Checkout</li>
        </ol>
        <div>
          <p>&copy; 2022, All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
