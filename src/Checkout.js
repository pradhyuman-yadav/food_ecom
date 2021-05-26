import React from "react";
import "./Checkout.css";
import demoAD from "./img/Components/demoAD.png";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_ad">
        <img className="checkout_ad" src={demoAD} alt="AD component" />
      </div>
      <div className="checkout_down">
        <div className="checkout_left">
          <div>
            <h3>Hello, {!user ? "Guest" : user.email}</h3>
            <h2 className="checkout_title">Your Order</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
