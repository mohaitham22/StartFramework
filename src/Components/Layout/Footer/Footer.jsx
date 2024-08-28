// import React from 'react'
// import style from './Footer.module.css'
// export default function Footer() {
//   return (
//     <>
//     <footer className= { `fixed-bottom pt-2 ${style.test} text-white text-center`}>
//     <div className="container">
//     <div className="row ">
//         <div className="col-md-4">
//           <div>
//             <h3 className=' fw-bold mb-3'>LOCATION</h3>
//             <p className=' mb-2'>2215 John Daniel Drive</p>
//             <p className=' mb-2'>Clark, MO 65243</p>

//           </div>
//         </div>
//         <div className="col-md-4">
//           <div>
//             <h3 className=' fw-bold mb-3'>AROUND THE WEB</h3>
//             <div className=' icon d-flex justify-content-center align-items-center '>
//               <div className={`${style.icon2} d-flex justify-content-center align-items-center`}>
//                 <i class="fa-brands fa-xl me-2 fa-facebook"></i>
//               </div>
//               <div className={`${style.icon2} d-flex justify-content-center align-items-center`}>
//                 <i class="fa-brands fa-xl me-2 fa-twitter"></i>
//               </div>
//               <div className={`${style.icon2} d-flex justify-content-center align-items-center`}>
//                 <i class="fa-brands fa-xl me-2 fa-linkedin"></i>
//               </div>
//               <div className={`${style.icon2} d-flex justify-content-center align-items-center`}>
//                 <i class="fa-solid fa-xl me-2 fa-globe"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div>
//             <h3 className=' fw-bold mb-3'>ABOUT FREELANCER</h3>
//             <p className=' mb-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className={`py-3 ${style.akher}`}>
//       <p>Copyright © Your Website 2021</p>
//     </div>
//     </footer>
   
//     </>
//   )
// }

import React from 'react';
import style from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={`bottom pt-5 ${style.test} text-white text-center`}>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-4">
              <h3 className="fw-bold mb-3">LOCATION</h3>
              <p className="mb-2">2215 John Daniel Drive</p>
              <p className="mb-2">Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold mb-3">AROUND THE WEB</h3>
              <div className="d-flex justify-content-center align-items-center">
                <div className={`${style.icon2} d-flex justify-content-center align-items-center me-2`}>
                  <i className="fa-brands fa-xl fa-facebook"></i>
                </div>
                <div className={`${style.icon2} d-flex justify-content-center align-items-center me-2`}>
                  <i className="fa-brands fa-xl fa-twitter"></i>
                </div>
                <div className={`${style.icon2} d-flex justify-content-center align-items-center me-2`}>
                  <i className="fa-brands fa-xl fa-linkedin"></i>
                </div>
                <div className={`${style.icon2} d-flex justify-content-center align-items-center me-2`}>
                  <i className="fa-solid fa-xl fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold mb-3">ABOUT FREELANCER</h3>
              <p className="mb-2">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        <div className={`py-3 ${style.akher}`}>
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
