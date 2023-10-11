import React, { useEffect, useState } from 'react'
import Layout from '../layout/layout';
import './styles/viewpage.css';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

function ViewPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [data, setData] = useState({
        email: '',
        name: '',
        number: '',
        profileUrl: ''
    })
    console.log(params)


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



    const onDeleteClick = () => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this contact?",
            icon: "warning",
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    localStorage.removeItem(params.id)
                    swal("Deleted!", "Your Contact has been delete", "success");
                    return navigate('/')
                }
            });
    }





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
                        <img src={data.profileUrl} />
                    </div>

                    <div>
                        <div>
                            <h2>{data.name}</h2>
                            <h3>{data.number}</h3>
                            <h3>{data.email}</h3>
                        </div>


                        <div className="action-button" >
                            <button >Edit</button>
                            <button onClick={() => onDeleteClick()} >Delete</button>
                        </div>

                    </div>

                </div>
                {/*  content */}

            </div>




        </Layout>
    )
}

export default ViewPage