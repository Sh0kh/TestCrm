import React from 'react'
import ProfileFoto from '/images/ProfileFoto2.png'

function Profil() {
  return (
    <div className='Profile w-full mt-[50px]'>
      <h1 className='text-[42px] font-bold'>
        Profil
      </h1>
      <div className='ProfileWrapper bg-white p-[30px] rounded-[16px] w-[550px] relative mt-[60px]'>
        <img src={ProfileFoto} alt=""  className='absolute top-[-25%] left-[38%] cursor-pointer'/>
        <div className='text-center mt-[50px]'>
          <h2 className='text-[25px] font-bold'>
            Bexruz Paxriddinov
          </h2>
          <span className='text-[16px] text-[#4F5759] font-medium'>
            CEO
          </span>
        </div>
       <div className='ProfilGrid grid grid-cols-2 gap-5 mt-[30px]'>
       <div className=' flex items-center gap-[16px] cursor-pointer'>
        <svg className='text-[25px] text-[#4F5759]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342c-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734c-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5s2.526 1.12 2.526 2.5s-1.132 2.5-2.526 2.5M19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6"></path></svg>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-[16px] text-[#4F5759] font-[500]'>
          +998 90 150 54 54
          </span>
          <span className='text-[16px] text-[#4F5759] font-[500]'>
          +998 90 150 54 54
          </span>
        </div>
        </div>
        <div className=' flex items-center gap-[16px] cursor-pointer'>
       <svg className='text-[25px] text-[#4F5759]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zm2-3a2 2 0 1 1 4 0v3h-4zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" clipRule="evenodd"></path></svg>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-[16px] text-[#4F5759] font-[500]'>
          ceo124
          </span>
        </div>
        </div>
        <div className=' flex items-center gap-[16px] cursor-pointer'>
        <svg className='text-[25px] text-[#4F5759]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></path></svg>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-[16px] text-[#4F5759] font-[500] w-[170px]'>
          Toshkent shahar, Chilozor, kichik daxa
          </span>
        </div>
        </div>
        <div className=' flex items-center gap-[16px] cursor-pointer'>
       <svg className='text-[25px] text-[#4F5759]'  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z" className="clr-i-solid clr-i-solid-path-1"></path><path fill="currentColor" d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z" className="clr-i-solid clr-i-solid-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-[16px] text-[#4F5759] font-[500]'>
          ceo@gmail.com
          </span>
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Profil