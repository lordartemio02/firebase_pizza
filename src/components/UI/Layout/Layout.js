import React from 'react'

import Navbar from '../Navbar/Navbar'
import ScrollToTop from '../../Util/ScrollToTop/ScrollToTop'

function Layout(props) {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            {props.children}
        </>
    )
}

export default Layout