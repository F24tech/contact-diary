import React, { useEffect, useState } from 'react'
import Layout from '../layout/layout'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AvatarGenerator } from 'random-avatar-generator'

function EditPage() {
    const navigate = useNavigate()
    const params = useParams()

    const [data, setData] = useState({
        email: '',
        name: '',
        number: '',
        profileUrl: ''
    })

    // Check localstorage data exists or not 
    const checkLoacalStorage = (id) => {
        const checkData = localStorage.getItem(id)
        if (!checkData)
            return false
        return true
    }

    useEffect(() => {
        const { id } = params

        const checkIdExists = checkLoacalStorage(id)
        if (checkIdExists) {
            const contactDetails = JSON.parse(localStorage.getItem(id))
            setData(contactDetails)
        } else {
            toast.error("Contact not exists")
            navigate('/')
        }

    }, [params])


    const handleChange = (e) => {
        const value = e.target;
        setData({
            ...data,
            [value.name]: value.value
        })
    }


    const handleUpdate = (e) => {
        e.preventDefault();

        // Generate a unique ID (you can use a library like 'uuid' for this purpose)
        const uniqueId = params.id

        const generator = new AvatarGenerator();

        const avatar = generator.generateRandomAvatar();

        // Store the updated data back in localStorage
        localStorage.setItem(uniqueId, JSON.stringify({
            ...data,
            profileUrl: avatar
        }));

        // Reset the form fields
        setData({
            name: '',
            email: '',
            number: '',
            profileUrl: '',
        });

        // Optionally, you can show a success message or redirect the user
        toast.success('Contact updated successfully!');
        return navigate('/')
    };


    return (
        <Layout>
            <form className="add-form " method="Post" onSubmit={handleUpdate} >
                <div className="inner-form shadow" >

                    <h2>Update Your Contact</h2>


                    {/* name */}
                    <div className='form-group'>
                        <label forHtml="name" >Name</label>
                        <input type="text" name="name" onChange={handleChange} value={data.name} required />
                    </div>


                    {/* phone */}
                    <div className='form-group'>
                        <label>Phone Number</label>
                        <input type="number" name="number" onChange={handleChange} value={data.number} required />
                    </div>
                    {/* email */}
                    <div className='form-group'>
                        <label>Email </label>
                        <input type="email" name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                        />
                    </div>


                    <button type="submit" className="btn  shadow" >Update</button>

                </div>
            </form>
        </Layout>
    )
}

export default EditPage