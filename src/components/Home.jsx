import React from "react";
import "../css/Home.css";

function Home() {
  return (
    <>
      <div>
        <div className="add-to-cart">cart</div>
        <h3>Home Component</h3>
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img alt="image here"></img>
          </div>
          <div className="text-wrapper item">
            <span>Item name</span>
            <span>Price of the item: $100</span>
          </div>
          <div className="btn-wrapper item">
            <button>Add Item</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
