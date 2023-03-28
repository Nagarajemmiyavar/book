import React from 'react';
import {Link} from 'react-router-dom';
import './Navabar.css';
const Navabar=()=>{
  return (
    <div className='nagaraj1'> 
    <Link  to="/home"><li style={{textAlign:"center",color:"lightblue"}}>HOME</li> </Link><Link to="/plane"><li style={{textAlign:"center",color:"lightblue"}}> FIND BUSES</li></Link>
    <Link to="/booking"><li style={{textAlign:"center",color:"lightblue"}}> BOOK NOW</li></Link>
    <Link to="/about "><li  style={{textAlign:"center",color:"lightblue"}}>ABOUT</li> </Link>
    <Link to="/contact"><li style={{textAlign:"center",color:"lightblue"}}>CONACT US</li></Link>
    </div>
  )
}
export default Navabar;


