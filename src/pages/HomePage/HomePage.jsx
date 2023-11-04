import React from "react";
import headerImage from "../../assets/icons/headerImage.svg";
import "../HomePage/HomePage.scss";
import AboutUs from "../../assets/AboutUs.svg";
import line from "../../assets/icons/line.svg";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="header w-300 flex justify-around items-center">
        <div>
          <h1>Redux</h1>
          <h1>закупки</h1>

          <button class="button type1">
            <span class="btn-txt">Узнать больше</span>
          </button>
        </div>
        <div>
          <img src={headerImage} alt="headerImage" />
        </div>
      </div>

      <section className="flex flex-row ml-56 mr-56 items-center mb-16">
        <div>
          <h1 className="text-[#b6f2fb] font-bold text-3xl mt-16">О нас</h1>

          <p className="mt-8 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            consequuntur blanditiis cupiditate placeat quaerat est eveniet
            corrupti sed, possimus dignissimos maiores minima numquam! Dolore
            incidunt cumque sunt ab enim reiciendis eius nulla totam
            perferendis! Assumenda autem esse officia aliquam et.
          </p>
          <div className="w-96 h-48 bg-[#b6f2fb] border rounded-xl p-6 mt-8 border-l-8 text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            velit, excepturi beatae distinctio veritatis necessitatibus quia.
            Debitis est ea facilis.
          </div>
        </div>
        <img src={AboutUs} alt="" className="w-96 h-96 p-10" />
      </section>
      <div>
        <div class="cards-list">
          <div class="card 1">
            <div class="card_image">
              {" "}
              <img src="https://cdn-icons-gif.flaticon.com/11259/11259503.gif" />{" "}
            </div>
            <div class="card_title title-white">
              <p>поставщики</p>
            </div>
          </div>

          <div class="card 2">
            <div class="card_image">
              <img src="https://cdn-icons-gif.flaticon.com/6569/6569161.gif" />
            </div>
            <div class="card_title title-white">
              <p>закупающие организации</p>
            </div>
          </div>

          <div class="card 3">
            <div class="card_image">
              <img src="https://cdn-icons-gif.flaticon.com/9822/9822035.gif" />
            </div>
            <div class="card_title">
              <p>тендеры</p>
            </div>
          </div>

          <div class="card 4">
            <div class="card_image">
              <img src="https://cdn-icons-gif.flaticon.com/11616/11616297.gif" />
            </div>
            <div class="card_title title-black">
              <p>бюджет</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
