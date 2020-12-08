import React from "react";
import paslon1 from "../../images/1.png"
import paslon2 from "../../images/2.png"
import paslon3 from "../../images/3.png"
import paslon4 from "../../images/4.png"

function Content() {
  return (
    <div className="container">
      <div className="columns is-desktop">
        <div className="column">
          <div className="box">
            <p class="heading is-size-4 has-text-centered">100%</p>
            <figure className="image is-square">
              <img
                src={paslon1}
                alt="Foto Paslon"
              />
            </figure>
            <p class="heading is-size-4 has-text-centered">1000</p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <p class="heading is-size-4 has-text-centered">100%</p>
            <figure className="image is-square">
              <img
                src={paslon2}
                alt="Foto Paslon"
              />
            </figure>
            <p class="heading is-size-4 has-text-centered">2000</p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <p class="heading is-size-4 has-text-centered">100%</p>
            <figure className="image is-square">
              <img
                src={paslon3}
                alt="Foto Paslon"
              />
            </figure>
            <p class="heading is-size-4 has-text-centered">1500</p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <p class="heading is-size-4 has-text-centered">100%</p>
            <figure className="image is-square">
              <img
                src={paslon4}
                alt="Foto Paslon"
              />
            </figure> 
            <p class="heading is-size-4 has-text-centered">750</p>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
