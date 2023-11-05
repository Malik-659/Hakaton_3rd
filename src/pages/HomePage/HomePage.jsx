import React, { useEffect } from "react";
import headerImage from "../../assets/icons/headerImage.svg";
import "../HomePage/HomePage.scss";
import AboutUs from "../../assets/AboutUs.svg";
// import line from "../../assets/icons/line.svg";
import "./HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="header w-300 flex justify-around items-center">
        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="h1-header">Redux</h1>
          <h1 className="h1-header">закупки</h1>

          <button className="button type1">
            <span className="btn-txt">Узнать больше</span>
          </button>
        </div>
        <div>
          <img
            src={headerImage}
            alt="headerImage"
            data-aos="fade-up"
            data-aos-duration="3000"
          />
        </div>
      </div>

      <section className="flex flex-row ml-56 mr-56 items-center mb-16">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-[#b6f2fb] font-bold text-3xl mt-16"
          >
            О нас
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="mt-8 text-2xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            consequuntur blanditiis cupiditate placeat quaerat est eveniet
            corrupti sed, possimus dignissimos maiores minima numquam! Dolore
            incidunt cumque sunt ab enim reiciendis eius nulla totam
            perferendis! Assumenda autem esse officia aliquam et.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-96 h-48 bg-[#b6f2fb] border rounded-xl p-6 mt-8 border-l-8 text-xl"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            velit, excepturi beatae distinctio veritatis necessitatibus quia.
            Debitis est ea facilis.
          </div>
        </div>
        <img
          src={AboutUs}
          alt=""
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-96 h-96 p-10"
        />
      </section>
      <div className="card-block ">
        <div className="cards-list mt-24">
          <div className="card 1" data-aos="fade-up" data-aos-duration="3000">
            <div className="card_image">
              {" "}
              <img src="https://cdn-icons-gif.flaticon.com/11259/11259503.gif" />{" "}
            </div>
            <div className="card_title title-white">
              <p>поставщики</p>
            </div>
          </div>

          <div className="card 2" data-aos="fade-up" data-aos-duration="3000">
            <div className="card_image">
              <img src="https://cdn-icons-gif.flaticon.com/6569/6569161.gif" />
            </div>
            <div className="card_title title-white">
              <p>закупающие организации</p>
            </div>
          </div>

          <div className="card 3" data-aos="fade-up" data-aos-duration="3000">
            <div className="card_image">
              <img src="https://cdn-icons-gif.flaticon.com/9822/9822035.gif" />
            </div>
            <div className="card_title">
              <p>тендеры</p>
            </div>
          </div>

          <div className="card 4" data-aos="fade-up" data-aos-duration="3000">
            <div className="card_image">
              <img src="https://cdn-icons-gif.flaticon.com/11616/11616297.gif" />
            </div>
            <div className="card_title title-black">
              <p>бюджет</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
