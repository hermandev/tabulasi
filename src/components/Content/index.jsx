import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuara, getTotalSuara } from "../../actions";
import paslon1 from "../../images/1.png";
import paslon2 from "../../images/2.png";
import paslon3 from "../../images/3.png";
import paslon4 from "../../images/4.png";

function Content() {
  const dispatch = useDispatch();
  const paslon = useSelector((data) => data.tabulasi.suara);
  const total = useSelector((data) => data.tabulasi.total);
  useEffect(() => {
    dispatch(getTotalSuara());
    dispatch(getSuara());
    const intervalId = setInterval(() => {
      dispatch(getTotalSuara());
      dispatch(getSuara());
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container">
      {paslon !== null && paslon.length < 0 && (
        <div className="columns is-desktop">
          <div className="column">
            <div className="box">
              <p className="title is-size-4 has-text-centered">
                {((paslon[0].suara / total) * 100).toFixed(2)}%
              </p>
              <figure className="image is-square">
                <img src={paslon1} alt="Foto Paslon" />
              </figure>
              <p className="title is-size-4 has-text-centered">
                {paslon[0].suara}
              </p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <p className="title is-size-4 has-text-centered">
                {((paslon[1].suara / total) * 100).toFixed(2)}%
              </p>
              <figure className="image is-square">
                <img src={paslon2} alt="Foto Paslon" />
              </figure>
              <p className="title is-size-4 has-text-centered">
                {paslon[1].suara}
              </p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <p className="title is-size-4 has-text-centered">
                {((paslon[2].suara / total) * 100).toFixed(2)}%
              </p>
              <figure className="image is-square">
                <img src={paslon3} alt="Foto Paslon" />
              </figure>
              <p className="title is-size-4 has-text-centered">
                {paslon[2].suara}
              </p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <p className="title is-size-4 has-text-centered">
                {((paslon[3].suara / total) * 100).toFixed(2)}%
              </p>
              <figure className="image is-square">
                <img src={paslon4} alt="Foto Paslon" />
              </figure>
              <p className="title is-size-4 has-text-centered">
                {paslon[3].suara}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
