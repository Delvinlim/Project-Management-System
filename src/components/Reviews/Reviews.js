import React from 'react'
import ReviewsButton from './ReviewsButton'
import ReviewsPerson from './ReviewsPerson'


const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        {/* <!-- Section Title --> */}
        <div className="section-title" data-aos="fade-up">
          <h2>Student's Reviews</h2>
          <p>Those review are based on the data that we collect from student that already using our system to help them manage their project, and surely its pure honest review by them.</p>
        </div>

        <ReviewsPerson />
        <ReviewsButton />
      </div>
    </section>
  )
}

export default Reviews