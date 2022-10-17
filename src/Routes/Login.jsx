import * as React from 'react';
import LoginForm from "../Components/Forms/LoginForm";
import LoginFriendsDesktop from '../Assets/login-friends-photo_square.jpg';

const Login = () => {

  return (
    <section className='flex flex-row items-center h-screen'>

      <div className='w-1/2'>
        <img className="h-screen w-full rounded-2xl" src={LoginFriendsDesktop} alt='Friends at party'/>
      </div>

      <div className='w-1/2'>
        <LoginForm />
      </div>

    </section>
  )
}

export default Login;