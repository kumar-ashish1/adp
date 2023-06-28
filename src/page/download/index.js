import React, { useState } from 'react'
import logo from '../../assets/Logos-02.png'
import icon from '../../assets/Logos-04.png'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { MdOutlineMailLock } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
const Download = () => {
    const [option, setOption] = useState('WhatsApp Number')
    const navigate = useNavigate()
    const handleOption = ({ target }) => {
        setOption(target?.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/download')
    }
    return (
        <div className="bg">
            <div className="main position-relative">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="col-innner d-flex justify-content-center align-items-center">
                    <form className='download-form' onSubmit={handleSubmit}>
                        <div className="form mb-4">
                            <h2 className='text-center'>Select One</h2>
                            <p className='text-center'>Select Option to continue</p>
                            <div className="downloads-form">
                                <div className="my-3">
                                    <input type="radio" name='company' onChange={handleOption} value="WhatsApp Number" checked={option === 'WhatsApp Number' ? true : false} className='d-hide' id='b1' />
                                    <label htmlFor="b1" className='d-inline-flex align-items-center'>
                                        <span className={option === 'WhatsApp Number' ? 'circal active' : 'circal'}></span>
                                        <span className='d-inline-block'>WhatsApp Number</span>
                                    </label>

                                    {
                                        option === 'WhatsApp Number' && <>
                                            <div className="form-input-group d-flex justify-content-center align-items-center my-4">
                                                <div className="input-icon d-flex justify-content-center align-items-center">
                                                    <FaWhatsapp />
                                                </div>
                                                <input type="text" className='form-input' placeholder='Enter your personal email address' />
                                            </div>
                                        </>
                                    }
                                </div>

                                <div className="my-3">
                                    <input type="radio" name='company' onChange={handleOption} value="official email" checked={option === 'official email' ? true : false} className='d-hide' id='b2' />
                                    <label htmlFor="b2" className='d-inline-flex align-items-center'>
                                        <span className={option === 'official email' ? 'circal active' : 'circal'}></span>
                                        <span className='d-inline-block'>Official Email</span>
                                    </label>

                                    {
                                        option === 'official email' && <>
                                            <div className="form-input-group d-flex justify-content-center align-items-center my-4">
                                                <div className="input-icon d-flex justify-content-center align-items-center">
                                                    <FiMail />
                                                </div>
                                                <input type="email" className='form-input quetion-btn-group-download' placeholder='Enter your personal email address' />
                                            </div>
                                        </>
                                    }
                                </div>

                                <div className="my-3">
                                    <input type="radio" name='company' onChange={handleOption} value="Personal Email" checked={option === 'Personal Email' ? true : false} className='d-hide' id='b3' />
                                    <label htmlFor="b3" className='d-inline-flex align-items-center'>
                                        <span className={option === 'Personal Email' ? 'circal active' : 'circal'}></span>
                                        <span className='d-inline-block'>Personal Email</span>
                                    </label>

                                    {
                                        option === 'Personal Email' && <>
                                            <div className="form-input-group d-flex justify-content-center align-items-center my-4">
                                                <div className="input-icon d-flex justify-content-center align-items-center">
                                                    <MdOutlineMailLock />
                                                </div>
                                                <input type="email" className='form-input quetion-btn-group-download' placeholder='Enter your personal email address' />
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="submit" type='submit'>
                                    Next
                                </button>
                            </div>
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

export default Download