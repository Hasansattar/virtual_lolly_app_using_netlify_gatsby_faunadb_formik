import React, { useRef, useState } from "react"
import Lolly from "../components/lolly"
import './style.css'

export default function Home() {
  
  const [c1, setC1] = useState("#deaa43");
  const [c2, setC2] = useState("#e95946");
  const [c3, setC3] = useState("#d52358");


  const handleSubmit = () => {
    console.log(senderField.current.value);
    console.log(msgField.current.value);
    console.log(receiverField.current.value);


  }


  const senderField = useRef();
  const receiverField = useRef();
  const msgField = useRef();


  return (
    <div className="container">
      <h2>CREATE LOLLY</h2>
      <div className="main-container">
        <div>
          <Lolly top={c1} middle={c2} bottom={c3} />
          <br />
          <input type="color" value={c1} onChange={(e) => setC1(e.target.value)} />
          <input type="color" value={c2} onChange={(e) => setC2(e.target.value)} />
          <input type="color" value={c3} onChange={(e) => setC3(e.target.value)} />
        </div>

        <div className="form-container">
          <input type="text" placeholder="To" ref={receiverField} />
          <textarea placeholder="Enter YOur Message" ref={msgField}></textarea>
          <input type="text" placeholder="Form" ref={senderField} />

          <button onClick={handleSubmit} >Send</button>
        </div>
      </div>
    </div>
  )
}
