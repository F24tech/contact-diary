import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    const [contacts, setContacts] = useState({})
    const navigate = useNavigate()

    const [search, setSearch] = useState('')



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







    return (
        <div className='sidebar'  >

            {/* Logo */}
            <Link to='/' className='brand' >SM Diary</Link>
            {/* Logo */}

            {/* Search Box */}
            <div className='search-box' >
                <input type='search' placeholder='Search Contacts' onChange={(e) => setSearch(e.target.value)} value={search} />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            {/* Search Box */}


            {/* Contact Cards */}
            <div className='contact-card' >

                {/* Card */}
                {Object.keys(contacts).map((key, index) => {

                    const lowerCaseSearch = search.toLowerCase()

                    if (contacts[key].name.toLowerCase().includes(lowerCaseSearch) || contacts[key].number.includes(lowerCaseSearch) || contacts[key].email.toLowerCase().includes(lowerCaseSearch)) {
                        return <div className='card'
                            key={index}
                            onClick={() => navigate(`/${key}`)}
                        >
                            <div>
                                <img src={contacts[key].profileUrl} alt={contacts[key].name} height={100} width={100} />
                            </div>
                            <h2>{contacts[key].name}</h2>
                        </div>
                    }
                }

                )}

                {/* Card */}


            </div>
            {/* Contact Cards */}







        </div>
    )
}

export default Sidebar