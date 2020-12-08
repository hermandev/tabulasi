import React, { useEffect, useState } from "react";
// import socketIOClient from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { getTps } from "../../actions";

function Header() {
  const dispatch = useDispatch();
  const tps = useSelector((data) => data.tabulasi.tps);
  const [initTps] = useState(814);
  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(getTps());
    const intervalId = setInterval(() => {
      dispatch(getTps());
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 40 }}>
      <nav className="level">
        <div className="level-item has-text-centered">
          <div className="notification is-danger">
            <p className="heading is-size-5">TPS</p>
            <p className="title">{initTps-tps}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="is-size-4" style={{ borderBottom: "1px solid #000" }}>
              TABULASI SUARA
            </p>
            <p className="is-size-2">NELSON - HENDRA</p>
          </div>
        </div>

        <div className="level-item has-text-centered">
          <div className="notification is-success">
            <p className="heading is-size-5">TPS</p>
            <p className="title">{tps}</p>
          </div>
        </div>
      </nav>
      <progress className="progress is-danger" value={tps} max={initTps}>
        90%
      </progress>
    </div>
  );
}

export default Header;
