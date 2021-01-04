import React from "react"
import Lolly from "./../components/lolly"
import { navigate } from "gatsby"
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <div className="main">
           <Header/>

        <div className="main-lolly">
          <label className="lolly">
          <Lolly top="red" middle="green" bottom="blue"  />
          </label>
          <label className="lolly">
          <Lolly top="pink" middle="skyblue" bottom="yellow" className="lolly" />
          </label>
          <label className="lolly">
          <Lolly top="blue" middle="silver" bottom="blue" className="lolly" />
          </label>
          <label className="lolly">
          <Lolly top="purple" middle="blue" bottom="green" className="lolly" />
          </label>
          <label className="lolly">
          <Lolly top="orange" middle="pink" bottom="blue" className="lolly" />
          </label>
        </div>

        <div className="button">
          {" "}
          <button
            onClick={() => {
              navigate("/Home")
            }}
          >
            create lolly
          </button>
        </div>
      </div>
    </>
  )
}
