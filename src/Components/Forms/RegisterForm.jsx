import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { createUser } from '../../API/UserAPI';


const RegisterForm = () => {

  const [passwordShowing, setPasswordShowing] = useState(false);

  const togglePasswordShowing = () => {
    setPasswordShowing(passwordShowing ? false : true);
  };

  const [user, setUser] = useState({
    uniqueId: 0,
    role: 'USER',
    email: '',
    password: ''
  });

  const handleUpdatingFormFields = async (event) => {
    event.preventDefault();

    let updatedValue = event.target.name;
    let newValue = event.target.value;
    setUser({...user, [updatedValue]: newValue});
  };

  const credentialsCheck = () => {
    if (user.password.length > 8) {
      return true;
    }
    return false;
  }

  const handleRegisterUser = async (event) => {
    event.preventDefault();

    if (!credentialsCheck()) {
      return alert("Please enter a password that contains over 8 characters");
    }

    const response = await createUser(user);
    console.log(response);
  };


  return (
    <>
      <section className='flex flex-col'>

        <div className='flex flex-col'>

          <form className='flex flex-col gap-3'>

            <div className='flex flex-col gap-1'>
              <label className='text-xl self-start'>Email*</label>
              <input className='border border-black rounded-md p-1' type={'email'} name={'email'} onChange={handleUpdatingFormFields} />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-xl self-start'>Password*</label>
              <input className='border border-black rounded-md p-1' type={passwordShowing ? 'text' : 'password'} name={'password'} onChange={handleUpdatingFormFields} />
            </div>

            <div className='flex flex-row items-center gap-4 self-center'>
            <span>Show password</span>
            <input type="checkbox" onClick={togglePasswordShowing}/>
            </div>

            <button className='py-2 bg-primary text-white rounded-lg text-xl' type='submit' value={"Sign In"} onClick={handleRegisterUser}>Register</button>
          </form>

          <p className='mt-1 flex gap-2 self-center'>
            <span>Already have an account?</span>
            <span className='text-secondary'><Link to={"/"}>Log In</Link></span>
          </p>
        </div>
        
      </section>
    </>
  )
}

export default RegisterForm;