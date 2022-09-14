import LoginForm from "../Components/LoginForm/LoginForm";
import LoginFriendsPhoto from "../Assets/login-friends-photo.jpg"

const Login = () => {
  return (
    <section className='flex flex-col justify-start h-screen'>

      <div className='pb-6'>
        <img src={LoginFriendsPhoto} alt='Friends at party' />
      </div>

      <LoginForm />
    </section>
  )
}

export default Login;