import React from 'react'
import Lolly from "../components/lolly"
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';


const GET_DATA = gql`{
  getVCard{
    id
     c1
     c2
     c3
     msg
     rec
     sender
      link
     
    
  }
}`;


export default function Template() {

    const { loading, error, data } = useQuery(GET_DATA);
    console.log("queary data",data)
    if (loading)
    return <h2>loading..</h2>
  if (error)
    return <h2>error</h2>
              
    return (

             
        <div>
            <Lolly top={data.getVCard[0].c1} middle={data.getVCard[0].c2} bottom={data.getVCard[0].c3}/>
        </div>
    )
}
