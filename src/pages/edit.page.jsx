import React from 'react'
import Layout from '../layout/layout'

function EditPage() {
    return (
        <Layout>
            <form className="add-form " >
                <div className="inner-form shadow" >

                    <h2>Update Your Contact</h2>



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


                    <button type="submit" className="btn  shadow" >Update</button>

                </div>
            </form>
        </Layout>
    )
}

export default EditPage