import React from 'react'
import Sidebar from '../components/sidebar.comp'


// csss
import './layout.css'

function Layout({ children }) {
    return (
        <div className="layout" >
            {/* Sidebar */}
            <Sidebar />

            {/* Sidebar */}


            {/* Right Content */}
            <div className="right-layout" >
                {children}
            </div>
            {/* Right Content */}
        </div>
    )
}

export default Layout