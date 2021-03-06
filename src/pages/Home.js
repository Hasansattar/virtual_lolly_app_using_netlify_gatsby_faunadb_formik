import React, { useRef, useState } from "react"
// import { navigate } from "gatsby"
import Lolly from "./../components/lolly"
import './style.css'
import {  useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { navigate } from "gatsby";


// const GET_DATA = gql`{
//   getVCard{
//     id
//      c1
//      c2
//      c3
//      msg
//      rec
//      sender
//       link
     
    
//   }
// }`;

const ADD_DATA = gql`
mutation addVCard($c1:String!,$c2:String!,$c3:String!,$rec:String!,$sender:String!,$msg:String!){
     addVCard(c1:$c1,c2:$c2,c3:$c3,rec:$rec,sender:$sender,msg:$msg){
       id
     }
}
`



export default function Home() {



  const [c1, setC1] = useState("#deaa43");
  const [c2, setC2] = useState("#e95946");
  const [c3, setC3] = useState("#d52358");


  const [addVCard] = useMutation(ADD_DATA);

  const handleSubmit = () => {
    console.log(senderField.current.value);
    console.log(msgField.current.value);
    console.log(receiverField.current.value);
    addVCard({
      variables: {
        c1: c1,
        c2: c2,
        c3: c3,
        rec: receiverField.current.value,
        sender: senderField.current.value,
        msg: msgField.current.value,

      }
    })
       
      navigate("/template")
  }


  const senderField = useRef();
  const receiverField = useRef();
  const msgField = useRef();





  // const { loading, error, data } = useQuery(GET_DATA);
  // console.log("queary data",data)
  // if (loading)
  //   return <h2>loading..</h2>
  // if (error)
  //   return <h2>error</h2>





  return (
    <div className="container">
      <h1>CREATE LOLLY</h1>
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

          <button onClick={handleSubmit}  >Freeze Lolly</button>



        </div>
      </div>
    </div>
  )
}

