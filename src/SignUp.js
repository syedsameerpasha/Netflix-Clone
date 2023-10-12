import React, { useRef } from 'react'
import './css/SignUp.css'
import { auth } from './Firebase';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { autoBatchEnhancer } from '@reduxjs/toolkit';


const SignUp = () => {
  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  const register=(e)=>{
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth,emailRef.current.value,
      passwordRef.current.value
      ).then(authUser=>{
        console.log(authUser)
      }).catch(error=>{
        alert(error.message)
      })


  }
  const signIn=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,emailRef.current.value,passwordRef.current.value)
    .then(authUser=>{console.log(authUser)
    }).catch(error=>{
      alert(error.message)
    })

  }
  return (
    <div className="signup">
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type='emal' placeholder='Email'/>
            <input ref={passwordRef} type='password' placeholder='Password'/>
            <button onClick={signIn}>Sign In</button>

            <h4>New to Netflix <span onClick={register}>Sign Up Now</span></h4>
        </form>

    </div>
  )
}

export default SignUp