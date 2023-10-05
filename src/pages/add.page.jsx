import React from 'react'
import Layout from '../layout/layout'


import './styles/addpage.css'

function AddPage() {
    return (
        <Layout>


            <form className="add-form " >
                <div className="inner-form shadow" >

                    <h2>Add Your Contact</h2>



                    {/* name */}
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" />
                    </div>


                    {/* phone */}
                    <div className='form-group'>
                        <label>Phone Number</label>
                        <input type="number" />
                    </div>
                    {/* email */}
                    <div className='form-group'>
                        <label>Email </label>
                        <input type="email" />
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