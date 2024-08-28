import React from 'react'
import style from './Home.module.css'
import image1 from './img/image 1.png'
export default function Home() {
  return (
    <>
        <header className= {`vh-100 d-flex align-items-center justify-content-center text-center ${style.header}`}>
            <div className="">
                <img  src={image1} alt="" className=' w-75' />
                <h2 className='text-white my-3 fw-bolder my-3 fs-1'>start Framework</h2>
                <div className={`mb-2 ${style.icon}`}>
                    <i class="fa-solid fa-star fa-xl text-white"></i>
                </div>
                <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
            </div>

        </header>
    </>
  )
}
