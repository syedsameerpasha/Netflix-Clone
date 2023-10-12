import React, { useEffect, useState } from 'react'
import './css/Nav.css'


import { auth } from './Firebase';
import { getAuth, signOut } from 'firebase/auth';


const Nav = () => {
    const  [show,handleShow]=useState(false);
    const transitionNavbar=()=>{
        if(window.scrollY>100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }
    useEffect(()=>{

        window.addEventListener("scroll",transitionNavbar)

        return ()=>{
            window.removeEventListener("scroll",transitionNavbar)
        }                         //after it calls remove eventlistner because i dont want to overload,,,alternate call and remove
    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}> {/*if i have nav show nav_black*/}
        <div className='nav_content'>
            <img src='https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png' className='logo'/>
            <img className='nav_avatar' src="https://icones.pro/wp-content/uploads/2021/04/icone-netflix-symbole-logo.png" onClick={()=>signOut(auth)}/>
        </div>

    </div>
  )
}

export default Nav