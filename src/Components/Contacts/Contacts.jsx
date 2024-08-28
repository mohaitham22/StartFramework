import React from 'react'
import style from './Contacts.module.css'

export default function Contacts() {
  return (
    <>
      <section className='  contact py-xxl-5'>
          <h2 className=' fw-bolder text-center mb-3 fs-1'>CONTACT SECTION</h2>
          <div className={`mb-2 ${style.icon} text-center`}>
                    <i class="fa-solid fa-star fa-xl "></i>
          </div>
          <div className="w-50 m-auto">
            <input type="text" placeholder='userName' className='w-100 border border-top-0 border-start-0 border-end-0 form-control form-control-lg mb-5' />
            <input type="number" placeholder='userAge' className='w-100 border border-top-0 border-start-0 border-end-0 form-control form-control-lg mb-5' />
            <input type="email" placeholder='userEmail' className='w-100 border border-top-0 border-start-0 border-end-0 form-control form-control-lg mb-5' />
            <input type="password" placeholder='userPassword' className='w-100 border border-top-0 border-start-0 border-end-0 form-control form-control-lg mb-5' />
            <button className=' btn btn-outline-primary'>Send massage</button>
          </div>
      </section>
    </>
  )
}
