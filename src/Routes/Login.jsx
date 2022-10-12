import * as React from 'react';
import LoginForm from "../Components/Forms/LoginForm";
import LoginFriendsPhoto from "../Assets/login-friends-photo.jpg";
import LoginFriendsDesktop from "../Assets/login-friends-desktop.jpg";

const Login = () => {

  return (
    <section className='flex flex-col justify-start h-screen lg:flex-row'>

      <div className='pb-6'>
        <img className="lg:hidden" src={LoginFriendsPhoto} alt='Friends at party' />
        <img className="hidden h-screen lg:flex" src={LoginFriendsDesktop} alt='Friends at party'/>
      </div>

      <LoginForm />
    </section>
  )
}

export default Login;