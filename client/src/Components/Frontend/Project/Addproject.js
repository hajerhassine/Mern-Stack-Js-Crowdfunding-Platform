import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  listprojects,
 
  createproject,
} from "../../../actions/projectActions";
import { PROJECT_CREATE_RESET } from "../../../constants/projectConstants";

const Addproject = ({ history, match }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
  const dispatch = useDispatch()
  const projectList = useSelector((state) => state.projectList)
  const { loading, error, projects } = projectList
//   const projectDelete = useSelector((state) => state.projectDelete)
//   const {
//     loading: loadingDelete,
//     error: errorDelete,
//     success: successDelete,
//   } = projectDelete

  const projectCreate = useSelector((state) => state.projectCreate)
  const {
    // loading: loadingCreate,
    // error: errorCreate,
    success: successCreate,
    project: createdproject,
  } = projectCreate
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin

  useEffect(() => {
 
    dispatch({ type: PROJECT_CREATE_RESET })
    
    // if (!userInfo.isAdmin) {
    //   history.push('/login')
    // }
 

    if (successCreate) {
        
      history.push(`/project`)
    } else {
      dispatch(listprojects())
    }
  }, [
    dispatch,
    // history,
    // userInfo,
   
    successCreate,
    createdproject,
  ])

//   const deleteHandler = (id) => {
//     if (window.confirm('Are you sure')) {
//       dispatch(deleteproject(id))
//     }
//   }


  const createprojectHandler = (e) => {
    e.preventDefault()
    const { data } =  axios.post(
        "api/projects",
        {
            name,price,category,image,description
        }
    );
  }

  return (
    <>
<Header/>
<section class="contact-section section-gap-extra-bottom">
        <div class="container">
            
            
<div class="contact-from-area">
                <div class="row no-gutters">
                   
                    <div class="col">
                        <div class="contact-form">
                            <form onSubmit={createprojectHandler}>
                                <h3 class="form-title">add project</h3>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="name"> Name</label>
                                            <input type="text"  placeholder='Enter name'
                                             value={name}
                                             onChange={(e) => setName(e.target.value)} id="name"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="phone-number">cost</label>
                                            <input type="number"  placeholder='DT'
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="email">category</label>
                                            <input type="text"  placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-field mb-25">
                                            <label for="subject">Subject</label>
                                            <input type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}/>
                 <input type="file" id='image-file'
                label='Choose File'
                custom
                
                onChange={uploadFileHandler}/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-field mb-30">
                                            <label for="message">Description</label>
                                            <textarea id="message" placeholder=""
                                            
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)} ></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-field">
                                            <button type="submit" class="main-btn">submit<i class="far fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
<Footer/>
</>
) }
export default Addproject ;