import React, { useEffect, useState } from 'react'
import Layout from '../layout/layout'
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { AvatarGenerator } from 'random-avatar-generator';




import './styles/addpage.css'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AddPage() {

    const [formValues, setFormValues] = useState({
        name: '',
        number: '',
        email: '',

    })
    const navigate = useNavigate()
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const value = e.target;
        setFormValues({
            ...formValues,
            [value.name]: value.value
        })
    }

    const handleImageUpload = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('upload_preset', 'your_upload_preset'); // Create an upload preset in your Cloudinary dashboard

        try {
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.CLOUDINARY_CLOUDNAME}/image/upload`,
                formData
            );

            if (res.data.secure_url) {
                setImage(res.data.secure_url);
            }
        } catch (error) {
            toast.error("Error uploading image")
            console.error('Error uploading image:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate a unique ID (you can use a library like 'uuid' for this purpose)
        const uniqueId = Date.now().toString();

        const generator = new AvatarGenerator();

        const avatar = generator.generateRandomAvatar();

        // Store the updated data back in localStorage
        localStorage.setItem(uniqueId, JSON.stringify({
            ...formValues,
            profileUrl: avatar
        }));

        // Reset the form fields
        setFormValues({
            name: '',
            email: '',
            number: '',
            profileUrl: '',
        });

        // Optionally, you can show a success message or redirect the user
        toast.success('Data submitted successfully!');
        return navigate('/')
    };






    return (
        <Layout>

            <form className="add-form " onSubmit={handleSubmit} >
                <div className="inner-form shadow" >

                    <h2>Add Your Contact</h2>



                    {/* name */}
                    <div className='form-group'>
                        <label forHtml="name" >Name</label>
                        <input type="text" name="name" onChange={handleChange} value={formValues.name} required />
                    </div>


                    {/* phone */}
                    <div className='form-group'>
                        <label>Phone Number</label>
                        <input type="number" name="number" onChange={handleChange} value={formValues.number} required />
                    </div>
                    {/* email */}
                    <div className='form-group'>
                        <label>Email </label>
                        <input type="email" name="email"
                            onChange={handleChange}
                            value={formValues.email}
                            required
                        />
                    </div>

                    {/* <div className='form-group'>
                        <label>Profile Picture</label>
                        <input type="file" onChange={handleImageUpload} />
                    </div>
                    {image && (
                        <div className='form-group'>
                            <Image
                                cloudName={process.env.CLOUDINARY_CLOUDNAME}
                                publicId={image}
                                width="300"
                                height="200"
                            />
                        </div>
                    )} */}


                    <button type="submit" className="btn  shadow" >Submit</button>

                </div>
            </form>

        </Layout>
    )
}

export default AddPage