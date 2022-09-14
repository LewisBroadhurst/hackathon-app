import LoginFriendsPhoto from "../Assets/login-friends-photo.jpg";
import LoginFriendsDesktop from "../Assets/login-friends-desktop2.jpg";
import RegisterForm from "../Components/RegisterForm/RegisterForm";

const Register = () => {

  return (
    <section className='flex flex-col justify-start h-screen lg:flex-row'>

        <div className='pb-6'>
            <img className="lg:hidden" src={LoginFriendsPhoto} alt='Friends at party' />
            <img className="hidden h-screen lg:flex" src={LoginFriendsDesktop} alt='Friends at party'/>
        </div>

        <RegisterForm />
    </section>
  )
}

export default Register;