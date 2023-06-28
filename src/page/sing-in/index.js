import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import logo from '../../assets/Logos-02.png'
import icon from '../../assets/Logos-04.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
const SignUp = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/event-registration')
    }
    return (
        <div className="bg">
            <div className="main">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="col-innner d-flex justify-content-center align-items-center">
                    <form className='p-5 signup-form' onSubmit={handleSubmit}>
                        <div className="form mb-4">
                            <h2 className='text-center'>Welcome!</h2>
                            <p className='text-center'>Please sign up using your <strong>vendor ID</strong> to continue</p>
                            <p className='text-center'>(you will find vendor key on iKARE under your profile)</p>

                            <div className="form-input-group d-flex justify-content-center align-items-center my-4">
                                <div className="input-icon d-flex justify-content-center align-items-center">
                                    <AiOutlineUser />
                                </div>
                                <input type="text" className='form-input' placeholder='Enter your vendor ID' />
                            </div>
                            <p className='text-center d-flex justify-content-center'>
                                <span>You have an account? </span> <NavLink className='text-dark text-decoration-none' to='/'><strong> Sign up </strong></NavLink>
                            </p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="submit" type='submit'>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                <div className="top-icon my-4">
                    <Image src={icon} />
                </div>
            </div>
        </div>
    )
}

export default SignUp
