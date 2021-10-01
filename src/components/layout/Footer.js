import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import paypalImage from "../../assets/images/paypal.png";
import discoverImage from "../../assets/images/discover.png";
import americanExpressrImage from "../../assets/images/american-express.png";
import visaImage from "../../assets/images/visa.png";
import maestroImage from "../../assets/images/maestro.png";

const Footer = () => {
  const [activeInfo, setActiveInfo] = React.useState(false);
  const [activePC, setActivePC] = React.useState(false);
  const [activeDesktop, setActiveDesktop] = React.useState(false);
  const [activeLaptop, setActiveLaptop] = React.useState(false);
  const [activeAddress, setActiveAddress] = React.useState(false);
  const toggleClass = (name) => {
    if (name === "info") {
      setActiveInfo(!activeInfo);
    }
    if (name === "PC") {
      setActivePC(!activePC);
    }
    if (name === "Desktop") {
      setActiveDesktop(!activeDesktop);
    }
    if (name === "Laptop") {
      setActiveLaptop(!activeLaptop);
    }
    if (name === "Address") {
      setActiveAddress(!activeAddress);
    }
  };

  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer__SignUpNews">
          <div className="Footer__SignUpNews--title">
            <h2>Sign Up To Our Newsletter.</h2>
            <p>Be the first to hear about the latest offers.</p>
          </div>
          <div className="Footer__SignUpNews--form">
            <Input className="input--email" placeholder="Your Email" />
            <Button
              className="btn--subscribe"
              type="primary"
              shape="round"
              size={14}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="Footer__information">
          <div className="Footer__information--about">
            <div className="wrap__title" onClick={() => toggleClass("info")}>
              <h2>Information</h2>
              <CaretDownOutlined
                className={`hide ${
                  !activeInfo
                    ? "show-md transformArrowDown-md"
                    : "show-md transformArrowUp-md"
                }`}
              />
            </div>
            <ul className={`show ${!activeInfo ? "hide-md" : "show-md"}`}>
              <li>About Us</li>
              <li>About Zip</li>
              <li>Privacy Policy</li>
              <li>Search</li>
              <li>Terms</li>
              <li>Orders and Returns</li>
              <li>Contact Us</li>
              <li>Advanced Search</li>
              <li>Newsletter Subscription</li>
            </ul>
          </div>
          <div className="Footer__information--PC">
            <div className="wrap__title" onClick={() => toggleClass("PC")}>
              <h2>PC Parts</h2>
              <CaretDownOutlined
                className={`hide ${
                  !activePC
                    ? "show-md transformArrowDown-md"
                    : "show-md transformArrowUp-md"
                }`}
              />
            </div>
            <ul className={`show ${!activePC ? "hide-md" : "show-md"}`}>
              <li>CPUS</li>
              <li>Add On Cards</li>
              <li>Hard Drives (Internal)</li>
              <li>Keyboards / Mice</li>
              <li>Cases / Power Supplies / Cooling</li>
              <li>RAM (Memory)</li>
              <li>Software</li>
              <li>Speakers / Headsets</li>
              <li>Motherboards</li>
            </ul>
          </div>
          <div className="Footer__information--desktop">
            <div className="wrap__title" onClick={() => toggleClass("Desktop")}>
              <h2>Desktop PCs</h2>
              <CaretDownOutlined
                className={`hide ${
                  !activeDesktop
                    ? "show-md transformArrowDown-md"
                    : "show-md transformArrowUp-md"
                }`}
              />
            </div>
            <ul className={`show ${!activeDesktop ? "hide-md" : "show-md"}`}>
              <li>Custom PCs</li>
              <li>Servers</li>
              <li>MSI All-In-One PCs</li>
              <li>HP/Compaq PCs</li>
              <li>ASUS PCs</li>
              <li>Tecs PCs</li>
            </ul>
          </div>
          <div className="Footer__information--laptop">
            <div className="wrap__title" onClick={() => toggleClass("Laptop")}>
              <h2>Laptops</h2>
              <CaretDownOutlined
                className={`hide ${
                  !activeLaptop
                    ? "show-md transformArrowDown-md"
                    : "show-md transformArrowUp-md"
                }`}
              />
            </div>
            <ul className={`show ${!activeLaptop ? "hide-md" : "show-md"}`}>
              <li>Evryday Use Notebooks</li>
              <li>MSI Workstation Series</li>
              <li>MSI Prestige Series</li>
              <li>Tablets and Pads</li>
              <li>Netbooks</li>
              <li>Infinity Gaming Notebooks</li>
            </ul>
          </div>
          <div className="Footer__information--address">
            <div className="wrap__title" onClick={() => toggleClass("Address")}>
              <h2>Address</h2>
              <CaretDownOutlined
                className={`hide ${
                  !activeAddress
                    ? "show-md transformArrowDown-md"
                    : "show-md transformArrowUp-md"
                }`}
              />
            </div>
            <ul className={`show ${!activeAddress ? "hide-md" : "show-md"}`}>
              <li>Address: 1234 Street Adress City Address, 1234</li>
              <li>
                Phones: <a>(00) 1234 5678</a>
              </li>
              <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
              <li>Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 11:00 AM - 5:00 PM</li>
              <li>
                E-mail: <a>shop@email.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer__social">
          <div className="Footer__social--socialNetwork">
            <FacebookOutlined className="iconFacebook" />
            <InstagramOutlined className="iconInstagram" />
          </div>
          <div className="Footer__social--pay">
            <Link>
              <img src={paypalImage} alt="" />
            </Link>
            <Link>
              <img src={visaImage} alt="" />
            </Link>
            <Link>
              <img src={americanExpressrImage} alt="" />
            </Link>
            <Link>
              <img src={maestroImage} alt="" />
            </Link>
            <Link>
              <img src={discoverImage} alt="" />
            </Link>
          </div>

          <div className="Footer__social--copyright">
            <span>Copyright © 2020 Shop Pty. Ltd.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
