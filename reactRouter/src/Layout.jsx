
import { Outlet } from 'react-router-dom'
import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer.jsx'

import React from 'react'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout