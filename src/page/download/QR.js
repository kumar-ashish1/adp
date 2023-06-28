import React from 'react'
import logo from '../../assets/Logos-02.png'
import icon from '../../assets/Logos-04.png'
import { MdFileDownloadDone } from 'react-icons/md'
import { Image } from 'react-bootstrap'
const QrCode = () => {
    return (
        <div className="bg">
            <div className="main position-relative">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="col-innner d-flex justify-content-center align-items-center">
                    <div className='download-form thanks'>
                        <h4 className='pb-5 text-center'>ADP COMPANY DAY - Registration</h4>
                        <div className="done pt-3">
                            <div className="circul">
                                <MdFileDownloadDone />
                            </div>
                            <div className="text">
                                Thanks!
                            </div>
                        </div>
                        <p className='mapara my-4'>
                            Thank you for your registration. You will get a confirmation email along with the QR code for the main event check in. Please save the QR code for smooth entry.
                        </p>
                    </div>
                </div>
                <div className="top-icon my-4">
                    <Image src={icon} />
                </div>
            </div>
        </div>

    )
}

export default QrCode