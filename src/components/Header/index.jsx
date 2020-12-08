import React, {useEffect} from "react";
import socketIOClient from "socket.io-client";

function Header() {
    useEffect(() => {
        const socket = socketIOClient("http://35.225.229.8:3000/");
        console.log(socket)
    }, [])
  return (
    <div className="container" style={{paddingTop:20, paddingBottom:40}}>
      <nav class="level">
        <div class="level-item has-text-centered">
          <div  class="notification is-danger">
            <p class="heading is-size-5">TPS</p>
            <p class="title">814</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="is-size-4" style={{borderBottom:'1px solid #000'}}>TABULASI SUARA</p>
            <p class="is-size-2">NELSON - HENDRA</p>
          </div>
        </div>
        
        <div class="level-item has-text-centered">
          <div  class="notification is-success">
            <p class="heading is-size-5">TPS</p>
            <p class="title">0</p>
          </div>
        </div>
      </nav>
      <progress class="progress is-danger" value="90" max="100">90%</progress>
    </div>
  );
}

export default Header;
