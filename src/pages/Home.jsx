import React from "react";
import "../css/Home.css";
import Navbar from "../components/Navbar";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import vanilla from "../assets/vanilla.jpeg";
import mint from "../assets/mint.jpeg";
import chocolate from "../assets/chocolate.jpeg";
import cookiesandcream from "../assets/cookiesandcream.jpeg";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const iceCreams = [
    { title: "Vanilla", image: vanilla },
    { title: "Chocolate", image: chocolate },
    { title: "Cookies & Cream", image: cookiesandcream },
    { title: "Mint Choco", image: mint },
  ];

  return (
    <div className="home" style={{ backgroundColor: "#9fe1ef" }}>
      <Navbar />
      <div>
        <h1 className="text-6xl font-bold block ml-28 mt-28 ">
          Indulge in Frozen Bliss: <br />
          Explore Our Scoops of Delight!
        </h1>
        <p className="text-4xl font-bold ml-28 mt-28">
          Discover our best products:
        </p>

        <div className="w-full flex justify-center mt-20">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/2"
          >
            {iceCreams.map((iceCream, index) => (
              <div key={index} className="flex justify-center">
                <div>
                  <img
                    src={iceCream.image}
                    alt={iceCream.title}
                    className="h-auto w-full max-h-72 max-w-full" style={{borderRadius: '10%'}}
                  />
                  <p className=" mt-8">{iceCream.title}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

      </div>
      <Contact/>
    </div>
  );
};

export default Home;
