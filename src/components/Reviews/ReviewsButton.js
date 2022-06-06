import axios from "axios";
import FormData from "form-data"
import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

const ReviewsButton = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [image, setImage] = useState(null)
  const [displayImage, setDisplayImage] = useState('')
  
  const showModal = () => {
    setIsToggle(true);
  };

  const hideModal = () => {
    setIsToggle(false);
  };

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    setDisplayImage(URL.createObjectURL(uploaded))
    setImage(uploaded)
  }

  const PostReviews = async(e) => {
    e.preventDefault();
    try {
      let bodyFormData = new FormData();
      bodyFormData.append('name', name)
      bodyFormData.append('comment', comment)
      bodyFormData.append('image', image)
      
      await axios.post('http://localhost:5000/api/reviews', bodyFormData)
        .then((response) => console.log(response.data))
      // TODO add an alert to notified review successfully added
      setIsToggle(false)
    } catch (error) {
      console.log(error)
      if(error.response) {
        console.log('helo')
        console.log(error.response.data)
      }
    }
  }
  
  return (
    <>
      <div className="d-gap mt-3 mx-auto w-75">
        <button className="btn btn-get-started btn-lg mt-3 w-100" onClick={showModal} type="button">Add Reviews</button>
        <Modal show={isToggle} onHide={hideModal} className="modal" size="lg" centered>
          <form onSubmit={PostReviews}>
            <Modal.Header className='text-center'>
              <Modal.Title className='fs-1 w-100'>Reviews Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">Comment</label>
                <textarea className="form-control" name="comment" id="comment" rows="3" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                {/* <input type="text" className="form-control" name="comment" id="comment" /> */}
              </div>
              <label htmlFor="image" className='mb-2'>Profile Image</label>
              <div className="form-group">
                <input type="file" className="form-control-file" accept="image/*" name="image" id="image" onChange={handleImageUpload} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={hideModal} className='btn'>Cancel</button>
              <button type="submit" className='btn btn-save'>Save</button>
            </Modal.Footer>          
          </form>
        </Modal>
      </div>
    </>

  )
}

export default ReviewsButton