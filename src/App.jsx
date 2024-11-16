import { useState } from "react";
import "./App.css";
import { FiAlignRight } from "react-icons/fi";
import h from "../src/assets/img/h.png";
import image1 from "../src/assets/img/IMAGE (2).png";
import image2 from "../src/assets/img/IMAGE (3).png";
import image4 from "../src/assets/img/IMAGE (4).png";
import huk from "../src/assets/icon/huk.png";
import Logo from "../src/assets/icon/Vector.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <a href="/" className="logo flex items-center gap-3">
            <img src={Logo} alt="png" />
          </a>
          <ul>
            <li>
              <a href="#">Business areas</a>
            </li>
            <li>
              <a href="#">Featured images</a>
            </li>
            <li>
              <a href="#">Gear cage</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button id="btn">Get template</button>
            </li>
          </ul>
           <button className="icons">
           <FiAlignRight size={40} color="white" />
           </button>
        </nav>
        <section
          className="section-1"
          style={{
            backgroundImage: `url(${huk})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="contend">
            <p className="text">Photographer & Filmmaker</p>
            <p className="text-1">Aperture Studios</p>
            <p className="text-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="contend-1">
            <div className="koe">
              <div className="div">
                <img src={h} alt="" />
                <p className="tero">1/2000s</p>
              </div>
              <div className="div">
                <img src={image1 } alt="" />
                <p className="tero">f/11</p>
              </div>
              <div className="div">
                <img src={image2} alt="" />
                <p className="tero">100</p>
              </div>
              <div className="div">
                <img src={image4} alt="" />
                <p className="tero">Iceland</p>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default App;
