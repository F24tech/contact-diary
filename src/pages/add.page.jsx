import React, { useState } from 'react'
import Layout from '../layout/layout'


import './styles/addpage.css'

function AddPage() {

    const [formValues, setFormValues] = useState({})
    const handleChange = (e) => {
        const value = e.target;
        setFormValues({
            ...formValues,
            [value.name]: value.value
        })
    }

    const uploadImage = () => {
        const cld = new Cloudinary({ cloud: { cloudName: 'dswujqrft' } });
        cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
            { public_id: "olympic_flag" },
            function (error, result) { console.log(result); });
    }



    console.log(formValues)



    return (
        <Layout>

            <form className="add-form " >
                <div className="inner-form shadow" >

                    <h2>Add Your Contact</h2>



                    {/* name */}
                    <div className='form-group'>
                        <label forHtml="name" >Name</label>
                        <input type="text" name="name" onChange={handleChange} />
                    </div>


                    {/* phone */}
                    <div className='form-group'>
                        <label>Phone Number</label>
                        <input type="number" name="number" onChange={handleChange} />
                    </div>
                    {/* email */}
                    <div className='form-group'>
                        <label>Email </label>
                        <input type="email" name="email"
                            onChange={handleChange}

                        />
                    </div>

                    <div className='form-group'>
                        <label>Profile Picture</label>
                        <input type="file" />
                    </div>


                    <button type="submit" className="btn  shadow" >Submit</button>

                </div>
            </form>

        </Layout>
    )
}

export default AddPage