import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    const [contacts, setContacts] = useState({})
    const navigate = useNavigate()



    const getContacts = () => {
        if (typeof Storage !== 'undefined') {
            const keys = Object.keys(localStorage)

            const temp = {}

            keys.map(key =>
                temp[key] = JSON.parse(localStorage.getItem(key))
            )




            setContacts(temp)

        }
    }

    useEffect(() => {
        getContacts()
    }, [])


    console.log(contacts)





    return (
        <div className='sidebar'  >

            {/* Logo */}
            <Link to='/' className='brand' >SM Diary</Link>
            {/* Logo */}

            {/* Search Box */}
            <div className='search-box' >
                <input type='search' placeholder='Search Contacts' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            {/* Search Box */}


            {/* Contact Cards */}
            <div className='contact-card' >

                {/* Card */}
                {Object.keys(contacts).map((key, index) =>
                    <div className='card'
                        key={index}
                        onClick={() => navigate(`/${key}`)}
                    >
                        <div>
                            <img src={contacts[key].profileUrl} alt={contacts[key].name} height={100} width={100} />
                        </div>
                        <h2>{contacts[key].name}</h2>
                    </div>
                )}

                {/* Card */}


            </div>
            {/* Contact Cards */}







        </div>
    )
}

export default Sidebar