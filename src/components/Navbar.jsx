import React, { useState } from 'react'
import Language from  '/images/Language.png'
import { NavLink } from 'react-router-dom'
import ProfileFoto from '/images/ProfileFoto.png'
import { useLocation } from 'react-router-dom'
function Navbar() {
  const [IsActive, setActive] = useState(false)
  const NavModal = () =>{
    setActive(!IsActive)
  }
  const location = useLocation()
  const Dashboard = location.pathname === '/'
  const Finance = location.pathname === '/finance'
  const Workers = location.pathname === '/workers'
  const Archive = location.pathname === '/archive'
  const Project = location.pathname === '/project'

  return (
    <div className='NavBar w-full relative' >
      <div className='flex items-center  justify-between gap-[5px] w-full'>
        <form>
          <label htmlFor="" className='flex items-center  gap-[5px] py-[11px] px-[11px] bg-white rounded-[16px] border-[0.1px] border-[#B4B5B0] w-[400px]'> 
          <svg className='text-[24px] text-[#56565B]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></path></svg>
          <input type="text" placeholder='Qidiruv' className='outline-none w-full text-[16px]' />
          </label>
        </form>
        <div className='flex gap-[21px] '>
          <button className='NavbarBtn bg-white rounded-[16px] border-[0.5px] border-[#B4B5B0] p-[9px] relative'>
          <svg className='text-[25px] text-[#C2C7CE]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.645 20.5a3.502 3.502 0 0 0 6.71 0zM3 19.5h18v-3l-2-3v-5a7 7 0 1 0-14 0v5l-2 3z"></path></svg>
          <span className='absolute top-[-10px] right-[-10px] bg-[#3AACCF] px-[8px] py-[1px] rounded-[50px] text-white'>
            2
          </span>
          </button>
          <button className='NavbarBtn bg-white rounded-[16px] border-[0.5px] border-[#B4B5B0] p-[9px]'>
              <img className='w-[28px] h-[28px]' src={Language} alt="" />
          </button>
          <NavLink to='/profil'>
            <div className='bg-white rounded-[16px] border-[0.5px] border-[#B4B5B0] p-[2px] px-[9px] flex items-center gap-[10px]'>
                <img className='w-[28px] h-[28px]' src={ProfileFoto} alt="" />
                <div className='flex  flex-col'>
                  <span className='text-[16px] font-medium font-montserrat'>
                    Bexruz P.
                  </span>
                  <span className='text-[12px] font-medium text-[#83818E] font-montserrat'>
                  CEO
                  </span>
                </div>
            </div>
          </NavLink>
        </div>
        <button className='burger text-[30px] hidden'  onClick={NavModal}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18"></path></svg>
        </button>
      </div>
      <div className={`${IsActive ? 'NavBarActive' : ''} NavBarModal fixed bg-customBg top-[0px] left-[0px] right-[0px] bottom-[] px-[25px] py-[30px] flex justify-between `}>
          <nav>
            <NavLink to='/' onClick={NavModal} className={`flex gap-[8px] mb-[15px] p-[5px] ${Dashboard ? 'bg-btnColor  rounded-[10px]' : ''}`}>
            <svg className={`h-5 w-5 text-white`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1M13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1"></path></svg>
            <span className='text-white font-montserrat'>
             Dashboard
            </span>
            </NavLink>
            <NavLink to='/finance' onClick={NavModal} className={`flex gap-[8px] mb-[15px] p-[5px] ${Finance ? 'bg-btnColor  rounded-[10px]' : ''}`}>
            <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26"><path fill="currentColor" d="M18 .188c-4.315 0-7.813 1.929-7.813 4.312S13.686 8.813 18 8.813c4.315 0 7.813-1.93 7.813-4.313S22.314.187 18 .187zm7.813 5.593c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.281V7.5c0 1.018.652 1.95 1.72 2.688c1.08.294 2.042.702 2.843 1.218c.993.252 2.085.406 3.25.406c4.315 0 7.813-1.929 7.813-4.312zm0 3c0 2.383-3.498 4.313-7.813 4.313c-.525 0-1.035-.039-1.531-.094a4.35 4.35 0 0 1 .781 1.781c.249.014.495.031.75.031c4.315 0 7.813-1.929 7.813-4.312zM8 11.187c-4.315 0-7.813 1.93-7.813 4.313S3.686 19.813 8 19.813c4.315 0 7.813-1.93 7.813-4.313S12.314 11.187 8 11.187m17.813.594c-.002 2.383-3.498 4.313-7.813 4.313c-.251 0-.505-.018-.75-.032c-.011.075-.017.175-.031.25c.05.151.093.3.093.47v1c.227.011.455.03.688.03c4.315 0 7.813-1.929 7.813-4.312zm0 3c-.002 2.383-3.498 4.313-7.813 4.313c-.251 0-.505-.018-.75-.032c-.011.075-.017.175-.031.25c.05.15.093.3.093.47v1c.227.011.455.03.688.03c4.315 0 7.813-1.929 7.813-4.312zm-10 2c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.282V18.5c0 2.383 3.497 4.313 7.813 4.313s7.813-1.93 7.813-4.313zm0 3c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.282V21.5c0 2.383 3.497 4.313 7.813 4.313s7.813-1.93 7.813-4.313z"></path></svg>
            <span className='text-white font-montserrat'>
            Molya
            </span>
            </NavLink>
            <NavLink  to='/workers' onClick={NavModal} className={`flex gap-[8px] mb-[15px] p-[5px]  ${Workers ? 'bg-btnColor  rounded-[10px]' : ''}`}>
            <svg   className="h-5 w-5  text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M17.754 11c.966 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V12.75c0-.966.783-1.75 1.75-1.75zM3.75 11l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.5 4.5 0 0 1 2 18.499V12.75A1.75 1.75 0 0 1 3.751 11m16.124-.002L24.25 11c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V12.75c0-.666-.237-1.276-.63-1.752M14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></path></svg>
            <span className='text-white font-montserrat'>
            Xodimlar
            </span>
            </NavLink>
            <NavLink to='/archive' onClick={NavModal} className={`flex gap-[8px] mb-[15px] p-[5px]  ${Archive ? 'bg-btnColor  rounded-[10px]' : ''}`}>
            <svg className="h-5 w-5  text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M13.981 2H6.018s-.996 0-.996 1h9.955c0-1-.996-1-.996-1m2.987 3c0-1-.995-1-.995-1H4.027s-.995 0-.995 1v1h13.936zm1.99 1l-.588-.592V7H1.63V5.408L1.041 6C.452 6.592.03 6.75.267 8c.236 1.246 1.379 8.076 1.549 9c.186 1.014 1.217 1 1.217 1h13.936s1.03.014 1.217-1c.17-.924 1.312-7.754 1.549-9c.235-1.25-.187-1.408-.777-2M14 11.997c0 .554-.449 1.003-1.003 1.003H7.003A1.003 1.003 0 0 1 6 11.997V10h1v2h6v-2h1z"></path></svg>
            <span className='text-white font-montserrat'>
            Arxiv
            </span>
            </NavLink>
            <NavLink to='/project' onClick={NavModal} className={`flex gap-[8px] mb-[15px] p-[5px] ${Project ? 'bg-btnColor  rounded-[10px]' : ''}`}>
            <svg className="h-5 w-5  text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M208 72v112H48V72Z" opacity={0.2}></path><path d="M88 144v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8v-24a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m56-72v96h8a8 8 0 0 1 0 16h-88v17.38a24 24 0 1 1-16 0V192H32a8 8 0 0 1 0-16h8V80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16m-80 152a8 8 0 1 0-8 8a8 8 0 0 0 8-8M40 64h176V48H40Zm160 16H56v96h144Z"></path></g></svg>
            <span className='text-white font-montserrat'>
            Loyihalar
            </span>
            </NavLink>
          </nav>
          <button className='h-[30px]'>
          <svg onClick={NavModal} className='text-[30px] text-btnColor' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9m0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7m.707-7l2.646-2.646a.5.5 0 0 0 0-.707a.5.5 0 0 0-.707 0L12 11.293L9.354 8.646a.5.5 0 0 0-.707.707L11.293 12l-2.646 2.646a.5.5 0 0 0 .707.708L12 12.707l2.646 2.646a.5.5 0 1 0 .708-.706z"></path></svg>
          </button>
      </div>
    </div>
  )
}

export default Navbar