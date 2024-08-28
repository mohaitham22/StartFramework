import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <>
      <section className= {`vh-100 d-flex align-items-center justify-content-center text-center ${style.test}`}>
          <div className=''>
            <h2 className=' text-white fw-bolder fs-2'>ABOUT COMPONENT</h2>
            <div className={`${style.icon}`}>
            <i class="fa-solid fa-star fa-xl text-white"></i>
            </div>
            <div className="container">
            <div className="row">
              <div className="col-md-6 pt-2">
                  <p className=' text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including
                     HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-6 pt-2">
                  <p className=' text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including
                     HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
            </div>
          
          </div>
      </section>
    </>
  )
}
