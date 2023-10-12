import React, { useState } from 'react'
import './css/login.css'
import SignUp from './SignUp'



const Login = () => {
    const [signIn,setSignIn]=useState(false)

    function showSignup(e){
        e.preventDefault()
        setSignIn(true)
    }
  return (
    <div className='login'>
        <div className='login_header'>

            <img className="login_logo" src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'/>
            <button className='login_button'>Sign In</button>
        </div>
        <div className='login_body'>
            {
                signIn ? (<SignUp/>) :(

                
            
                   <>
                       <h1>Unlimited movies, TV shows and more</h1>
                       <h2>Watch anywhere. Cancel anytime.</h2>
                       <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <form className='login_form' onSubmit={showSignup}>
                        <input type='text' placeholder='Email Address'/>
                        <button>Get Started</button>
                       </form>
            
        
            
                   </>       
                )
           } 
                 
            </div>
        <div className='login_gradient'>

        </div>


    </div>
    
  )
}

export default Login