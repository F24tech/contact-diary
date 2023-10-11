import React from 'react'
import Layout from '../layout/layout'
import { Link } from 'react-router-dom'
import './styles/homepage.css'

import Homeimg from '../assets/images/home.png'

function HomePage() {
    return (
        <Layout>

            <div className="home-page" >
                <img

                    height={400}
                    src={Homeimg}
                    alt="Home Page"

                />

                <Link
                    className='btn shadow' to="/add" >Add Contact</Link>
            </div>

        </Layout>
    )
}

export default HomePage