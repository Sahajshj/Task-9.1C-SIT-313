import Input from "./Input"
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import './Signup.css';
import {createAuthUserWithEmailAndPassword, createuserdocfromAuth} from './firebase'
function Signup() {
  const navigate = useNavigate();
  
  const [contact, setcontact] =useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const {displayName,email,password,confirmPassword} =contact
  console.log(contact)
  async function handleClick(event)
  {
   if(password!==confirmPassword)
   {  
    alert('The Password do not match!!!!!')
    return;
   }
    try{
    const {user} = await createAuthUserWithEmailAndPassword(email,password)
   
    console.log(user)
    navigate('/login'); 
    } 
    catch(error){
      alert('ENTER THE CREDENTIALS CORRECTLY')
    console.log('error in creation', error.message)
    }
  }

   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

    }
     })

  }
  return (
    <div className="header2" >
     <h3> Create a DEV@Deakin Account</h3>
     <br></br>
     <label className='Q1'>Name*</label>
      <Input
        name = 'displayName'
        type='text'
        placeholder='Name'
        onChange ={handlepass}
      />
      <br></br>

      <label className='Q2'>Email*</label>
      <Input
        name = 'email'
        type='email'
        placeholder='Email'
        onChange ={handlepass}
      />
      <br></br>

      <label className='Q3'>Password*</label>
      <Input
        name= 'password'
        type='password'
        placeholder='Password'
        onChange ={handlepass}
        />
      <br></br>
    
      <label className='Q4'>Confirm Password*</label>
      <Input
        name= 'confirmPassword'
        type='password'
        placeholder='   ConfirmPassword'
        onChange ={handlepass}
        />
      <br></br>
      <button onClick={handleClick}>
      Create
      </button>
             <br></br>
             <br></br>
    
    </div>
)}
export default Signup