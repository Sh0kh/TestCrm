import React from 'react'
import '../pages/Media.css'
import { useState } from 'react';
import LoginFoto from '/images/LoginFoto.png'
export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const PasswordFuc = () => {
    setPasswordShown(!passwordShown)
  }
  return (
    <div>
      <div className='flex'>
        <div className='w-full h-screen flex items-center  bg-customBg'>
          <div className='login-Form ml-[100px] p-[15px]'>
            <h1 className='text-[67.778px] font-montserrat font-bold text-white mb-[60px]'>
              Kirish
            </h1>
            <form>
              <label htmlFor="Email" className='flex gap-[10px] pb-[5px] border-b-[1px] border-white w-[300px] pr-[5px] cursor-pointer mb-[30px]'>
                <svg className='text-[30px] text-white' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"></path></svg>
                <input oninput="removeE(event)" placeholder='Telefon' id='Email' type="number" className='bg-transparent outline-none border-none text-white w-full text-[16px] font-medium' />
              </label>
              <label htmlFor="Password" className='flex gap-[10px] pb-[5px] border-b-[1px] border-white w-[300px]  cursor-pointer'>
                <svg className='text-[30px] text-white' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9zm4 10c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1z"></path></svg>
                <input placeholder='Parol' id='Password' type={passwordShown ? 'text' : 'password'} className='bg-transparent outline-none border-none text-white w-full text-[16px] font-medium' />
                <div className='flex' onClick={PasswordFuc}>
                  {passwordShown ? (
                    <svg className='w-[24px] h-[24px] text-white' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6s-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8c-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4s12.8 9.6 22.4 9.6s16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2c-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8c160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"></path><path fill="currentColor" d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2c64 0 115.2-22.4 160-64c41.6-41.6 64-96 64-160c0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4c0 44.8-16 83.2-48 112s-67.2 48-112 48"></path></svg>
                  ) : (
                    <svg className='w-[24px] h-[24px] text-white' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></path></svg>
                  )}
                </div>
              </label>
              <p className='text-[#868593] w-[300px] mt-[12px] text-[12px]'>
                Hurmatli foydalanuvchi shuni unutmangki sizning kiritadigon parolingiz kamida <span className='text-[#D8F275]'> 6 harfdan</span> iborat bolishi kerak  <span className='text-[#D8F275]'>!!!</span>
              </p>
              <button type='submit' className='bg-btnColor py-[8px] px-[20px] rounded-md flex  items-center justify-between mt-[60px] w-[142px] border border-btnColor hover:bg-transparent hover:text-white transition duration-500 ease-in-out' >
                <span className='text-[25px] font-bold'>
                  Kirish
                </span>
                <svg className=' text-[24px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>
              </button>
            </form>
          </div>
        </div>
        <div className='Login-Foto w-full h-screen flex items-center justify-center bg-white'>
          <img className='LoginFoto' src={LoginFoto} alt="" />
        </div>
      </div>
    </div>
  )
}
