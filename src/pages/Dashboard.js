import React from 'react'
import {auth} from  '../firebase'
 export default function Dashboard() {

const signOut = ()=>{
auth.signOut()
    

}



    return (
        <div>
           <h1>this is Dashboard Route</h1> 
           <button onClick={signOut}>Log Out</button>
        </div>
    )
}
