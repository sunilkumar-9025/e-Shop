import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home_container">
          <img src="img/homeImage.png" alt="homeImage" className="home_image" />
          <div className="home_row">
            <Product
              id="1234546"
              image="https://m.media-amazon.com/images/I/61JZG+RYQnL._SY450_.jpg"
              title="Hp Wired On Ear Headphones With Mic With 3.5 Mm Drivers, In-Built Noise Cancelling, Foldable And Adjustable For Laptop/Pc/Office/Home/ 1 Year Warranty (B4B09Pa)"
              rating={5}
              price={2399}
            />
            <Product
              id="1566354"
              image="https://m.media-amazon.com/images/I/41p3lLAV0YL._SX425_.jpg"
              title="Gadget Deals Hard Disk Cover/ Hard Disk Drive Pouch case for 2.5 inch HDD Cover WD Seagate Slim Sony Dell Toshiba (Black)"
              rating={4}
              price={579}
            />
          </div>
          <div className="home_row">
            <Product
              id="4646311"
              image="https://m.media-amazon.com/images/I/71Pk6o+INCL._SY300_SX300_.jpg"
              title="Bennett Mystic 15.6 inch(39.6cm) Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
              rating={5}
              price={512}
            />
          </div>
          <div className="home_row">
            <Product
              id="46546431"
              image="https://m.media-amazon.com/images/I/61UJ5tUUl0L._SX679_.jpg"
              title="HP AIO PC 12th Gen Intel Core i3-1215U 21.5 inch(54.6 cm) FHD Anti Glare Display (8GB/1TB HDD+256GB SSD/Win 11/Intel UHD Graphics/Wireless Keyboard & Mouse Combo/MS Office/Jet Black,22-dd2456in"
              rating={3}
              price={55999}
            />
            <Product
              id="465465798"
              image="https://m.media-amazon.com/images/I/61rBqHWhl1L._SX679_.jpg"
              title='(Renewed) HP EliteDesk 19" All-in-One Desktop Computer Set (Intel i5 6th Gen/8 GB DDR4 RAM/256 GB SSD /19" HD Monitor+Tiny CPU+KB+Mouse+ HD Webcam+Speakers+WiFi/Windows 11/MS Office)'
              rating={3}
              price={21391}
            />
            <Product
              id="9876467634"
              image="https://m.media-amazon.com/images/I/71Oi6vdhy0L._SY450_.jpg"
              title="HP Scanjet Pro 2000 s2 Sheet-Feed Scanner"
              rating={4}
              price={27999}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
