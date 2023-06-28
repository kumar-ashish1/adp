import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './page/sign-up'
import SignIn from './page/sing-in'
import StepOne from './page/step/stepOne'
import Download from './page/download'
import QrDownload from './page/download/QR'

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/select-download-option' element={<Download />} />
                <Route path='/event-registration' element={<StepOne />} />
                <Route path='/download' element={<QrDownload />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main