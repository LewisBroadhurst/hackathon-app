import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const LoginForm = () => {

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

  const handleLoginUser = async (event) => {
    event.preventDefault();

    if (!credentialsCheck()) {
      return alert("Please enter a password that contains over 8 characters");
    }

    // const response = await createUser(user);
    // console.log(response);
  };

  return (
    <section className='flex flex-col gap-2 justify-center'>

      <form className='flex flex-col gap-2'>

        <div className='flex flex-col'>
          <label className='text-xl self-start'>Email*</label>
          <input className='border border-black rounded-md p-1' type={'email'} name={'email'} onChange={handleUpdatingFormFields} />
        </div>

        <div className='flex flex-col'>
          <label className='text-xl self-start'>Password*</label>

          <div className='flex flex-col relative'>
            <input className='border border-black rounded-md p-1' type={passwordShowing ? 'text' : 'password'} name={'password'} onChange={handleUpdatingFormFields} />
            <span className='absolute top-1/2 translate-y-[-50%] right-2 hover:cursor-pointer hover:text-primary-focus' onClick={togglePasswordShowing}>{passwordShowing ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</span>
          </div>

          <span className='self-center cursor-pointer mt-0.5 border-b-2 border-white hover:border-accent hover:text-accent'>Forgot password?</span>
        </div>

        <button className='py-2 rounded-lg text-lg bg-primary text-white transition-all duration-500 hover:bg-primary-focus hover:scale-[.97]' type='submit' value={"Sign In"}>Sign In</button>

      </form>

      <p className='flex gap-1 self-center'>Don't have an account?
        <span><Link to={'/register'} className='text-secondary border-b-white border-b-2 hover:border-b-secondary'>Register</Link></span>
      </p>

    </section>
  )
}

export default LoginForm;