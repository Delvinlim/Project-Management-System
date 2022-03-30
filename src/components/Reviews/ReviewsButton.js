import axios from "axios";
import FormData from "form-data"
// import FormData from "form-data"
import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

const ReviewsButton = () => {
  const [isToggle, setIsToggle] = useState(false);
  
  const showModal = () => {
    setIsToggle(true);
  };

  const hideModal = () => {
    setIsToggle(false);
  };

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [image, setImage] = useState('')
  
  const PostReviews = async(e) => {
    e.preventDefault();
    try {
      let bodyFormData = new FormData();
      // bodyFormData.append('name', name)
      // bodyFormData.append('comment', comment)
      bodyFormData.append('image', image)
      console.log(bodyFormData.values())
      console.log(image.replace('C:\\fakepath\\', ' '))
      
      // await axios.post('http://localhost:5000/reviews', bodyFormData, {
      //   headers: {
      //     ...bodyFormData.getHeaders()
      //   },
      // });
      // console.log("abc")
      // .then((response) => {
      //   console.log(response)
      // })
      // .catch((response) => {
      //   console.log(response)
      // })
      // console.log(response)
      await axios.post('http://localhost:5000/reviews', {
        name: name,
        comment: comment,
        image: bodyFormData
      }, {
        headers: {
          ...bodyFormData.getHeaders()
        }
      })
      alert("successfully added a post reviews")
    } catch (error) {
      if(error.response) {
        console.log(error.response.data)
      }
    }
  }

  // NOTE => providing image give error. get rid of the image api is ok

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
                <input type="file" className="form-control-file" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
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