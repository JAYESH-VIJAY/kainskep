import React from "react"
import './Hero.scss'

export default function Hero(props) {

    return (
          <div className="box-x">
              <div className="herobx" style={{ backgroundImage: `url(${props.heroimg})` }}>
                </div>
            
                {/* <div className="txtbx">
                    <h1>{props.maintx}</h1>
                    <p style={{ display: props.subtx ? "block" : "none" }}>{props.subtx}</p>
                </div> */}
                <div className="content">
                    <h1>{props.maintx}</h1>
                </div>

    
          </div>
         

    )
}