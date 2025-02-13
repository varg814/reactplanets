import React, { useState } from "react";
import { Link, useParams } from "react-router";
import Data from "../../data.json";

export default function Planets() {
  const { name } = useParams();
  const newData = Data.find((planet) => planet.name === name);
  console.log(newData);
  const [burger, setBurger] = useState(false);

  function show() {
    setBurger(!burger);
  }

  const [currentLayer, setCurrentLayer] = useState("planet");

  const layerData = {
    planet: {
      image: newData.images.planet,
      text: newData.overview.content,
      source: newData.overview.source,
    },
    internal: {
      image: newData.images.internal,
      text: newData.structure.content,
      source: newData.structure.source,
    },
    geology: {
      image: newData.images.geology,
      text: newData.geology.content,
      source: newData.geology.source,
    },
  };

  function changeLayer(layer) {
    setCurrentLayer(layer);
  }

  return (
    <>
      <div className="page">
        <nav>
          <Link to={`/Planets/Earth`}>The Planets</Link>
          <ul>
            {Data.map((item, index) => (
              <li key={index}>
                <Link to={`/Planets/${item.name}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="burgerMenu">
            <div onClick={show} className="icon">
              <div className="burgerLine"></div>
              <div className="burgerLine"></div>
              <div className="burgerLine"></div>
            </div>
            <div className="menu">
              {burger && (
                <ul className="menuUl">
                  {Data.map((item, index) => (
                    <>
                      <li key={index}>
                        <div className={`dot ${item.name}`} />
                        <Link to={`/Planets/${item.name}`}>{item.name}</Link>
                      </li>
                      <div className="line"></div>
                    </>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>

        <div className="content">
          <main>
            <div className="planet_img">
              {currentLayer === "geology" && (
                <img src={newData.images.planet} alt={newData.name} />
              )}
              <img
                className={currentLayer === "geology" ? "geology" : ""}
                src={layerData[currentLayer].image}
                alt={newData.name}
              />
            </div>
            <div className="planet_content">
              <div className="planet_text">
                <h1>{newData.name}</h1>
                <p>{layerData[currentLayer].text}</p>
                <a href={layerData[currentLayer].source}>
                  <span className="source">Source:</span>{" "}
                  <span className="wikipedia">Wikipedia</span>
                </a>
              </div>

              <div className="planet_layers">
                <button
                  className={
                    currentLayer === "planet" ? newData.name : "button"
                  }
                  onClick={() => changeLayer("planet")}
                >
                  <p>01</p>
                  <h1>OVERVIEW</h1>
                </button>
                <button
                  className={
                    currentLayer === "internal" ? newData.name : "button"
                  }
                  onClick={() => changeLayer("internal")}
                >
                  <p>02</p>
                  <h1>INTERNAL STRUCTURE</h1>
                </button>
                <button
                  className={
                    currentLayer === "geology" ? newData.name : "button"
                  }
                  onClick={() => changeLayer("geology")}
                >
                  <p>03</p>
                  <h1>SURFACE GEOLOGY</h1>
                </button>
              </div>
            </div>
          </main>
          <footer>
            <div className="footer_item">
              <p>ROTATION TIME</p>
              <h1>{newData.rotation}</h1>
            </div>
            <div className="footer_item">
              <p>REVOLUTION TIME</p>
              <h1>{newData.revolution}</h1>
            </div>
            <div className="footer_item">
              <p>RADIUS</p>
              <h1>{newData.radius}</h1>
            </div>
            <div className="footer_item">
              <p>AVERAGE TEMP.</p>
              <h1>{newData.temperature}</h1>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
