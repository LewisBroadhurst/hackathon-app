import RegisterForm from '../Components/Forms/RegisterForm';

const Register = () => {

  return (
    <section className='flex flex-col justify-start h-screen lg:flex-row'>

        <div className='pb-6'>
            {/* <img className="hidden h-screen lg:flex" src={} alt='Friends at party'/> */}
        </div>

        <RegisterForm />
    </section>
  )
}

export default Register;