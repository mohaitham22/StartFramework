

import React, { useState } from 'react';
import style from './Portfolio.module.css';
import image1 from './img/Screenshot 2024-08-28 114239.png';
import image2 from './img/Screenshot 2024-08-28 114254.png';
import image3 from './img/Screenshot 2024-08-28 114332.png';

export default function Portfolio() {

  const [data, setData] = useState([
    {img : image1, id : "img1"},
    {img : image2, id : 'img2'},
    {img : image3, id : 'img3'},
    {img : image1, id : "img4"},
    {img : image2, id : 'img5'},
    {img : image3, id : 'img6'},
  ])

  return (
    <>
      <section className="py-5 text-center">
        <div className="mt-4">
          <h2 className="fw-bolder">PORTFOLIO COMPONENT</h2>
          <div className={`${style.icon} mb-3`}>
            <i className="fa-solid fa-6x fa-star fa-xl"></i>
          </div>
          <div className="container">
            <div className="row g-4">
              {data.map((item,index) => {
                return  <div key={index} className="col-md-4">
                <div className={style.portfolio}>
                  <img src={item.img} alt="Portfolio 1" className="w-100 rounded-3" />
                  <div data-bs-toggle="modal" data-bs-target= {'#' + item.id} className={style.plus}>
                    <i className="fa-solid fa-6x fa-plus"></i>
                  </div>
                </div>
              </div>
              })}
              
              {data.map((item) => {
               return <>
               



<div class="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-body">
        <img src={item.img} alt="" className='w-100' />
      </div>
    
    </div>
  </div>
</div>
                </>
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
