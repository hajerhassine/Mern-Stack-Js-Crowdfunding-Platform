import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import axios from "axios";
import Header from '../BackOffice/Header/Header';
import LeftSide from '../BackOffice/LeftSide/LeftSide';
const AddEvent = () => {

    const [title , setTitle] = useState("");
    const [description , setDescriptiin] = useState("");
    const [modality , setModality] = useState("");
    const [category , setCategory] = useState("");
    const [eventImage, seteventImage] = useState('')
    const events = useSelector((state)=> state.events);
    const [uploading, setUploading] = useState(false)
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('eventImage', file)
        setUploading(true)
    
        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
    
          const { data } = await axios.post('/events/upload', formData, config)
    
          seteventImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { data } =  axios.post(
            "events",
            {
                title,description,category,modality,eventImage
            }
        );
        window.location = '/listevent';
      }
  return (
    <div>

            <Header></Header>
            <LeftSide></LeftSide>
            <div>
     <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="card-header">
                      <h4>New Event</h4>
                    </div>
                    <div className="card-body">
                    <div className="form-group">
                        <label>Title</label>
                        <input
                  className="my-2"
                  name="title"
                  type="text"
                  placeholder="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <input
                  className="my-2"
                  name="description"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={e => setDescriptiin(e.target.value)}
                />
                      </div>
                      <div className="form-group">
                        <label>Modality</label>
                        <input
                  className="my-2"
                  name="modality"
                  type="text"
                  placeholder="modality"
                  value={modality}
                  onChange={e => setModality(e.target.value)}
                />
                      </div>
                     
                      <div className="form-group">
                        <label>Category</label>
                        <input
                  className="my-2"
                  name="category"
                  type="text"
                  placeholder="category"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                />
                      </div>
                      <div>
                      <input type='text'
                placeholder='Enter image url'
                value={eventImage}
                onChange={(e) => seteventImage(e.target.value)}/>
                 <input type="file" id='image-file'
                label='Choose File'
                custom
                
                onChange={uploadFileHandler}/> 
                      </div>
                      </div>
                    <div className="card-footer text-right">
                      <input type="submit" value="Add New Event" className="btn btn-primary"/>
                    </div>
                  </form>
                </div>
                
              </div>
        
            </div>
          </div>
        </section>
        
      </div>
      </div>
      </div>
  )
}

export default AddEvent