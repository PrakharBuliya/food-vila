import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";

/*
                Header
                    -logo
                    -navbar items(right side)
                    -cart
                Body
                    - Search bar
                    - Restraunt list
                        -Many  Restraunt card
                            -Image
                            -name
                            -rating
                            -cusine
                    -
                Footer
                    -links
            */

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const BurgerKing = {
  name: "Burger King",
  image:
    "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/b/t/p3683-164007826661c19bba6cb1d.jpg?tr=tr:n-xlarge",
  cuisines: ["Burger", "American"],
  rating: "4.2",
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={BurgerKing.image} />
      <h2>{BurgerKing.name}</h2>
      <h3>{BurgerKing.cuisines.join(", ")}</h3>
      <h4>{BurgerKing.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-List">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
