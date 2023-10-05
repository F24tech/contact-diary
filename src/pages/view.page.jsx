import React from 'react'
import Layout from '../layout/layout';
import './styles/viewpage.css';
import { useNavigate } from 'react-router-dom';

function ViewPage() {
    const navigate = useNavigate()
    return (
        <Layout>
            {/* Add New */}
            <div className="add-new-btn" >
                <button onClick={() => navigate('/add')} className="btn btn-">Add New</button>
            </div>
            <div className="view-page" >


                {/*  content */}
                <div className="view-contact" >

                    <div>
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80" />
                    </div>

                    <div>
                        <div>
                            <h2>Mayur</h2>
                            <h2>+91987654321</h2>
                            <h2>email@email.com</h2>
                        </div>


                        <div className="action-button" >
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>

                    </div>

                </div>
                {/*  content */}

            </div>




        </Layout>
    )
}

export default ViewPage