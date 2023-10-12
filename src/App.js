
import './App.css';
import Login from './Login';
import HomeScreen from './HomeScreen';
import { logout, login,selectUser } from './features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        //login
        dispatch(login({
          uid:user.uid,
          email:user.email
        }))
      }
      else{
        //logout
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[])
  return (
    <div className="App">
      {
        !user ?(<Login/>) : (<HomeScreen/>)
      }
      
      
    </div>
  );
}

export default App;
