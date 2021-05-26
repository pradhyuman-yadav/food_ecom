import React from "react";
import "./Home.css";
import Product from "./Product";
import homeImage from "./img/Page/We_are_open.svg";
import pizzaPhoto from "./img/Products/Pizza.jpg";
import FrenchFriesPhoto from "./img/Products/FrenchFries.jpg";
import AvocardoToast from "./img/Products/AvocardoToast.jpg";
import EggToast from "./img/Products/Egg&Toast.jpg";
import Pancakes from "./img/Products/Pancakes.jpg";
import FullMeal from "./img/Products/FullMeal.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={homeImage} alt="We are Open!" />

        <div className="home_row">
          <Product id="5654687656" title="Pizza" price={249} image={pizzaPhoto} rating={5}/>
          <Product id="8765986875" title="French Fries" price={99} image={FrenchFriesPhoto} rating={3}/>
          {/* 2 Product */}
        </div>

        <div className="home_row">
          <Product id="6309721452" title="Avocardo Toast" price={149} image={AvocardoToast} rating={4}/>
          <Product id="8765984325" title="Egg with Toast" price={129} image={EggToast} rating={4}/>
          <Product id="2134253678" title="Pancakes with Honey and Blueberrys" price={149} image={Pancakes} rating={1}/>
          {/* 3 Product */}
        </div>

        <div className="home_row">
          <Product id="5446587659" title="Full 8 Course Meal Package" price={699} image={FullMeal} rating={4}/>
          {/* 1 Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
