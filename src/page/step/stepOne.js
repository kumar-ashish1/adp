import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { MdArrowBackIos } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import icon from '../../assets/Logos-04.png'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/Logos-02.png'
const StepOne = () => {
    const [qOne, setQOne] = useState('')
    const [qTwo, setQTwo] = useState('')
    const [food, setFood] = useState('')
    const [isBusiness, setIsBusiness] = useState(false)
    const [Service, setService] = useState(true)
    const handleCompany = ({ target }) => {
        setQOne(target?.value)
    }
    const handleBusiness = ({ target }) => {
        setQTwo(target?.value)
    }
    const handleFood = ({ target }) => {
        setFood(target?.value)
    }
    const handleService = ({ target }) => {
        setService(target?.value)
    }

    // submit form 
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        if (qOne === 'yes') {
            navigate('/select-download-option')
        } else {
            navigate('/download')
        }
    }
    return (
        <div className="bg-step">
            <div className="bg-inner position-relative py-5">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="step-form py-5 mt-3">
                    <div className="step-form-inner">
                        <div className='mb-4'>
                            <div className="header d-flex align-items-center">
                                <NavLink className='text-decoration-none back-button d-flex align-items-center justify-content-center'>
                                    <MdArrowBackIos />
                                </NavLink>
                                <div className="heading d-flex align-items-center">
                                    24th Company Day Event Registration
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="quetion-group ">
                                    <div className="quetion pt-4">
                                        Would you like to attend ADP India Company Day celebrations scheduled on July 30, 2023? <span>*</span>
                                    </div>
                                    <div className="quetion-btn-group my-4 d-flex">
                                        <input type="radio" name='company' onChange={handleCompany} value="yes" checked={qOne === 'yes' ? true : false} className='d-hide' id='yes' />
                                        <input type="radio" name='company' onChange={handleCompany} value="no" checked={qOne === 'no' ? true : false} className='d-hide' id='no' />
                                        <label htmlFor="yes" className={qOne === 'yes' && 'QueActive_yes'}>Yes</label>
                                        <span>.</span>
                                        <label htmlFor="no" className={qOne === 'no' && 'QueActive_no'}>No</label>
                                    </div>
                                </div>
                                {
                                    qOne === 'yes' && <>
                                        {/* Mention your Full Name as per iKARE */}
                                        <div className="quetion-group ">
                                            <div className="quetion">
                                                Mention your Full Name as per iKARE. <span>*</span>
                                            </div>
                                            <div className="quetion-btn-group my-4 d-flex">
                                                <input type="text" placeholder='Enter your answare' />
                                            </div>
                                        </div>

                                        {/*  Select your business unit */}
                                        <div className="quetion-group">
                                            <div className="quetion">
                                                Select your business unit<span>*</span>
                                            </div>

                                            <div className="quetion-btn-group d-flex align-items-center select-btn-group mt-3 mb-1 d-flex">
                                                <div className={isBusiness ? 'arrow active' : 'arrow'}>
                                                    <IoIosArrowDown />
                                                </div>
                                                <div className='position-absolute input'>
                                                    <input type="text" placeholder='Please Select' value={qTwo} readOnly onClick={() => {
                                                        setIsBusiness(!isBusiness)
                                                    }} />
                                                </div>
                                            </div>
                                            {
                                                isBusiness && <div className="select-opation">
                                                    <div className="my-2">
                                                        <input type="radio" name='company' onChange={handleBusiness} value="Enterprise Wide Functions" checked={qTwo === 'Enterprise Wide Functions' ? true : false} className='d-hide' id='b1' />
                                                        <label htmlFor="b1" className='d-inline-flex align-items-center'>
                                                            <span className={qTwo === 'Enterprise Wide Functions' ? 'circal active' : 'circal'}></span>
                                                            <span className='d-inline-block'>Enterprise Wide Functions</span>
                                                        </label>
                                                    </div>
                                                    <div className="my-2">
                                                        <input type="radio" name='company' onChange={handleBusiness} value="GETS" checked={qTwo === 'GETS' ? true : false} className='d-hide' id='b2' />
                                                        <label htmlFor="b2" className='d-inline-flex align-items-center'>
                                                            <span className={qTwo === 'GETS' ? 'circal active' : 'circal'}></span>
                                                            <span className='d-inline-block'>GETS</span>
                                                        </label>
                                                    </div>
                                                    <div className="my-2">
                                                        <input type="radio" name='company' onChange={handleBusiness} value="Global Finance" checked={qTwo === 'Global Finance' ? true : false} className='d-hide' id='b3' />
                                                        <label htmlFor="b3" className='d-inline-flex align-items-center'>
                                                            <span className={qTwo === 'Global Finance' ? 'circal active' : 'circal'}></span>
                                                            <span className='d-inline-block'>Global Finance</span>
                                                        </label>
                                                    </div>
                                                    <div className="my-2">
                                                        <input type="radio" name='company' onChange={handleBusiness} value="GPT" checked={qTwo === 'GPT' ? true : false} className='d-hide' id='b4' />
                                                        <label htmlFor="b4" className='d-inline-flex align-items-center'>
                                                            <span className={qTwo === 'GPT' ? 'circal active' : 'circal'}></span>
                                                            <span className='d-inline-block'>GPT</span>
                                                        </label>
                                                    </div>
                                                    <div className="my-2">
                                                        <input type="radio" name='company' onChange={handleBusiness} value="Service Delivery" checked={qTwo === 'Service Delivery' ? true : false} className='d-hide' id='b5' />
                                                        <label htmlFor="b5" className='d-inline-flex align-items-center'>
                                                            <span className={qTwo === 'Service Delivery' ? 'circal active' : 'circal'}></span>
                                                            <span className='d-inline-block'>Service Delivery</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            }
                                        </div>


                                        {/* Please specify your food preference */}
                                        <div className="quetion-group ">
                                            <div className="quetion">
                                                Please specify your food preference <span>*</span>
                                            </div>
                                            <div className="quetion-btn-group my-4 d-flex">
                                                <input type="radio" name='food' onChange={handleFood} value="Veg" checked={food === 'Veg' ? true : false} className='d-hide' id='Veg' />
                                                <input type="radio" name='food' onChange={handleFood} value="Non Veg" checked={food === 'Non Veg' ? true : false} className='d-hide' id='NonVeg' />
                                                <label htmlFor="Veg" className={food === 'Veg' && 'QueActive_yes'}>Veg</label>
                                                <span>.</span>
                                                <label htmlFor="NonVeg" className={food === 'Non Veg' && 'QueActive_no'}>Non Veg</label>
                                            </div>
                                        </div>


                                        <div className="quetion-group ">
                                            <div className="quetion">
                                                I acknowledge that if I fail to check-in at the event venue before 4:00 PM IST on the day of the event, my registration will become invalid and there will be a one time deduction of INR 1500 from my payroll towards TARANG payroll giving. <span>*</span>
                                            </div>
                                            <div className="select-opation my-4">
                                                <div className="">
                                                    <input type="radio" name='company' onChange={handleService} value="Service Delivery" checked={Service === 'Service Delivery' ? true : false} className='d-hide' id='Service' />
                                                    <label htmlFor="Service" className='d-inline-flex align-items-center'>
                                                        <span className={Service === 'Service Delivery' ? 'circal active' : 'circal'}></span>
                                                        <span className='d-inline-block'>I acknowledge</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                }
                                <div className="d-flex justify-content-center next-btn pt-5">
                                    <button className="submit" type='submit'>
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="top-icon my-4">
                    <Image src={icon} />
                </div>
            </div>
        </div>
    )
}

export default StepOne
