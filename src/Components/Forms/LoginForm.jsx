import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loginUser } from '../../API/UserAPI';
import { useContext } from 'react';
import { UserContext } from '../../Contexts/User.context';


const LoginForm = () => {

  const { user, login } = useContext(UserContext);
  const [passwordShowing, setPasswordShowing] = useState(false);
  const navigate = useNavigate();

  const togglePasswordShowing = () => {
    setPasswordShowing(passwordShowing ? false : true);
  };

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });

  const handleUpdatingFormFields = async (event) => {
    event.preventDefault();

    let updatedValue = event.target.name;
    let newValue = event.target.value;
    setUserLogin({...userLogin, [updatedValue]: newValue});
  };

  const handleLoginUser = async (event) => {
    event.preventDefault();
    let id = 1;

    const response = await loginUser(userLogin.email, userLogin.password);

    if (response) {
      login(response);
      console.log("currentUser:", user.email);
      return navigate(`/organisation/${id}`);
    }

    alert("Could not match username/password");
  };

  return (
    <section className='flex flex-col gap-2 justify-center'>

      <form className='flex flex-col gap-2'>

        <div className='flex flex-col'>
          <label className='text-md self-start'>Email*</label>
          <input className='border border-black rounded-md p-1' type={'email'} name={'email'} onChange={handleUpdatingFormFields} />
        </div>

        <div className='flex flex-col'>
          <label className='text-md self-start'>Password*</label>

          <div className='flex flex-col relative'>
            <input className='border border-black rounded-md p-1' type={passwordShowing ? 'text' : 'password'} name={'password'} onChange={handleUpdatingFormFields} />
            <span className='absolute top-1/2 translate-y-[-50%] right-2 hover:cursor-pointer hover:text-primary-focus' onClick={togglePasswordShowing}>{passwordShowing ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</span>
          </div>

          <span className='self-center cursor-pointer mt-0.5 border-b-2 border-white text-slate-400 hover:border-accent hover:text-accent'>Forgot password?</span>
        </div>

        <button className='py-2 rounded-lg text-lg bg-primary text-white transition-all duration-500 hover:bg-primary-focus hover:scale-[.97]' type='submit' value={"Sign In"} onClick={handleLoginUser}>Sign In</button>

      </form>

      <p className='flex gap-1 self-center'>
        <span>Don't have an account?</span>
        <span><Link to={'/register'} className='text-secondary border-b-white border-b-2 hover:border-b-secondary'>Register</Link></span>
      </p>

    </section>
  )
}

export default LoginForm;