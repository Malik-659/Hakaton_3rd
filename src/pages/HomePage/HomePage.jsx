import React from "react";
import "./HomePage.css";


const HomePage = () => {
  return (
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
  );
};

export default HomePage;
