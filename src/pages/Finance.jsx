import React, { useState, useRef, useEffect } from 'react'
import Calendar from '/images/FinanceCalendar.svg'
import Yers from '/images/FinanceYers.svg'
// import Setting from '../../public/images/DashboardSetting.png'
function Finance() {
  const modalRef2 = useRef(null);
  const [showCard, setShowCard] = useState(true);
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);
  const [showCard3, setShowCard3] = useState(true);
  const [isSmallModal, setSmallModal] = useState(false)
const [isDeleteModal, setDeleteModal] = useState(false)
  const handleChangeCard = () => {
    setShowCard(false);
    setTimeout(() => {
      setShowCard(true);
      setShowCard1(!showCard1);
    }, 300);
  };
  const OpenSmallModal = () =>{
    setSmallModal(!isSmallModal)
  }
  const DeleteModal = () =>{
    setDeleteModal(!isDeleteModal)
  }
  const handleChangeCard2 = () => {
    setShowCard2(false);
    setTimeout(() => {
      setShowCard2(true);
      setShowCard3(!showCard3);
    }, 300);
  };
  const handleClickOutside = (e) => {

    if (modalRef2.current && !modalRef2.current.contains(e.target)) {
      AllDeleteModal();
    }
  };

  useEffect(() => {
    if (isDeleteModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDeleteModal]);
  
  const AllDeleteModal = () =>{
    // OpenSmallModal()
    DeleteModal()
  }
  return (
    <div className='Finance w-full pb-[50px]'>
      <div className='mt-[50px]'>
        <h1 className='text-[42px] font-[600] text-TitleColor font-montserrat'>
          Moliya
        </h1>
        <div className='Finance__Wrapper flex items-center gap-[25px] mt-[50px]'>
          <div className='Finance__card relative w-[373px] h-[150px] rounded-[16px]'>
            {showCard1 && (
              <div className={`bg-white p-[15px] rounded-[16px] card ${showCard ? 'fade-in' : 'fade-out'}`}>
                <div className='flex items-center justify-end mb-[15px]'>
                  <button onClick={handleChangeCard} className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                    <img src={Calendar} alt="" />
                    <span className='text-[10px] text-[#1B1A28] font-montserrat '>
                      oylik
                    </span>
                  </button>
                </div>
                <div className='flex items-end gap-[2px]'>
                  <h2 className='text-[35px] text-TitleColor] font-[600] font-montserrat'>
                    <span className='text-[16px] text-[#4F5759] font-[500] font-montserrat mr-[5px]'>
                      UZS
                    </span>
                    10000000
                  </h2>
                </div>
                <div className='flex items-center justify-end'>
                  <span className='text-[16px] font-[400] text-[#4F5759]'>
                    Oylik tushum
                  </span>
                </div>
              </div>
            )}
            {!showCard1 && (
              <div className={`bg-white p-[15px] rounded-[16px] card ${showCard ? 'fade-in' : 'fade-out'}`}>
                <div className='flex items-center justify-end mb-[15px]'>
                  <button onClick={handleChangeCard} className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                    <img src={Yers} alt="" />
                    <span className='text-[10px] text-[#1B1A28] font-montserrat '>
                      yilik
                    </span>
                  </button>
                </div>
                <div className='flex items-end gap-[2px]'>
                  <h2 className='text-[35px] text-TitleColor] font-[600] font-montserrat'>
                    <span className='text-[16px] text-btnColor font-[500] font-montserrat mr-[5px]'>
                      UZS
                    </span>
                    1 000 000 000
                  </h2>
                </div>
                <div className='flex items-center justify-end'>
                  <span className='text-[16px] font-[400] text-[#4F5759]'>
                    Yillik tushum
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className='Finance__card relative w-[373px] h-[150px] rounded-[16px]'>
            {showCard3 && (
              <div className={`bg-white p-[15px] rounded-[16px] card ${showCard2 ? 'fade-in' : 'fade-out'}`}>
                <div className='flex items-center justify-end mb-[15px]'>
                  <button onClick={handleChangeCard2} className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                    <img src={Calendar} alt="" />
                    <span className='text-[10px] text-[#1B1A28] font-montserrat '>
                      oylik
                    </span>
                  </button>
                </div>
                <div className='flex items-end gap-[2px]'>
                  <h2 className='text-[35px] text-TitleColor] font-[600] font-montserrat'>
                    <span className='text-[16px] text-[#4F5759] font-[500] font-montserrat mr-[5px]'>
                      UZS
                    </span>
                    10000000
                  </h2>
                </div>
                <div className='flex items-center justify-end'>
                  <span className='text-[16px] font-[400] text-[#4F5759]'>
                    Oylik sof foyda
                  </span>
                </div>
              </div>
            )}
            {!showCard3 && (
              <div className={`bg-white p-[15px] rounded-[16px] card ${showCard2 ? 'fade-in' : 'fade-out'}`}>
                <div className='flex items-center justify-end mb-[15px]'>
                  <button onClick={handleChangeCard2} className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                    <img src={Yers} alt="" />
                    <span className='text-[10px] text-[#1B1A28] font-montserrat '>
                      yilik
                    </span>
                  </button>
                </div>
                <div className='flex items-end gap-[2px]'>
                  <h2 className='text-[35px] text-TitleColor] font-[600] font-montserrat'>
                    <span className='text-[16px] text-btnColor font-[500] font-montserrat mr-[5px]'>
                      UZS
                    </span>
                    1 000 000 000
                  </h2>
                </div>
                <div className='flex items-center justify-end'>
                  <span className='text-[16px] font-[400] text-[#4F5759]'>
                    Yillik sof foyda
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className='Finance__card bg-white p-[15px] rounded-[16px] h-[150px]'>
            <div className='flex items-center justify-end mb-[15px] '>
              <button className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                {/* <img src={Calendar} alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M17.754 11c.966 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V12.75c0-.966.783-1.75 1.75-1.75zM3.75 11l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.5 4.5 0 0 1 2 18.499V12.75A1.75 1.75 0 0 1 3.751 11m16.124-.002L24.25 11c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V12.75c0-.666-.237-1.276-.63-1.752M14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></path></svg>
                <span className='text-[10px] text-[#1B1A28] font-montserrat '>
                  umumiy
                </span>
              </button>
            </div>
            <div className='flex items-end gap-[2px]'>
              <h2 className='text-[35px] text-TitleColor] font-[600] font-montserrat'>
                <span className='text-[16px] text-[#4F5759] font-[500] font-montserrat mr-[5px]'>
                  UZS
                </span>
                6 000 000
              </h2>
            </div>
            <div className='flex items-center justify-end'>
              <span className='text-[16px] font-[400] text-[#4F5759]'>
                xodimlar oyligi
              </span>
            </div>
          </div>
        </div>
        <div className=' FinanceTable bg-white rounded-[16px] p-[30px] w-[466px] mt-[50px] '>
          <table className='w-full'>
            <thead className='w-full'>
              <tr className='w-full'>
                <th className='text-left mr-[60px]'>
                  <span className='text-[25px] font-montserrat font-[600] text-TitleColor'>
                    Loyihalar
                  </span>
                </th>
                <th className='text-left mr-[60px]'>
                  <span className='text-[16px] text-[#83818E] font-[400] flex items-center gap-[4px]'>
                    loyiha turi
                  </span>
                </th>
                <th className='text-left mr-[60px]'>
                  <span className='text-[16px] text-[#83818E] font-[400] flex items-center gap-[4px]'>
                    summa
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='mt-[25px]'>
                <td className='text-left pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D]'>1.</span>
                  <span className='text-[16px] font-[400] text-[#2C393D]'> Loyiha nomi</span>
                </td>
                <td className='pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D] '>
                    website
                  </span>
                </td>
                <td className='pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D]'>
                    350$
                  </span>
                </td>
                <td className='pt-[25px] relative'>
                  <button  onClick={OpenSmallModal} className='finance__deletBtn cursor-pointer' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19" fill="none">
                      <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                      <circle cx="2.5" cy="9.5" r="2.5" fill="black" />
                      <circle cx="2.5" cy="16.5" r="2.5" fill="black" />
                    </svg>
                  </button>
                  <button onClick={DeleteModal} className='Finance__delete__btn flex items-center justify-center bg-[#FEE2D6] p-[5px] rounded-[4px]'>
                      <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m-4.74 6.703A1.5 1.5 0 0 0 6.246 14h3.508a1.5 1.5 0 0 0 1.487-1.297L12.427 4H3.573z"></path></svg>
                      </button>
                  <div className={` FinanseSamllModal w-[70px] h-[50px] pr-[10px] py-[9px] absolute top-[9px] right-[-90px] z-0 hidden   ${isSmallModal ? 'SamllModalActive': ''} `}>
                      <button onClick={DeleteModal} className= ' flex items-center justify-center bg-[#FEE2D6] p-[5px] rounded-[4px]'>
                      <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m-4.74 6.703A1.5 1.5 0 0 0 6.246 14h3.508a1.5 1.5 0 0 0 1.487-1.297L12.427 4H3.573z"></path></svg>
                      </button>
                  </div>  
                </td>
              </tr>
              <tr className='mt-[25px]'>
                <td className='text-left pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D]'>2.</span>
                  <span className='text-[16px] font-[400] text-[#2C393D]'> Loyiha nomi</span>
                </td>
                <td className='pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D] '>
                    website
                  </span>
                </td>
                <td className='pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D]'>
                    350$
                  </span>
                </td>
                <td className='pt-[25px] relative'>
                  <button   className='finance__deletBtn cursor-pointer' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19" fill="none">
                      <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                      <circle cx="2.5" cy="9.5" r="2.5" fill="black" />
                      <circle cx="2.5" cy="16.5" r="2.5" fill="black" />
                    </svg>
                  </button>
                  <button onClick={DeleteModal} className='Finance__delete__btn flex items-center justify-center bg-[#FEE2D6] p-[5px] rounded-[4px]'>
                      <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m-4.74 6.703A1.5 1.5 0 0 0 6.246 14h3.508a1.5 1.5 0 0 0 1.487-1.297L12.427 4H3.573z"></path></svg>
                      </button>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={`WorkersModal p-[5px] bg-[#d9d9d9bc] fixed inset-0 flex items-center justify-center ${isDeleteModal ? 'WorkersModalActive' : ''}`}>
        <div ref={modalRef2} className='Modal bg-customBg rounded-[16px] p-[30px] w-[360px] text-center'>
          <h2 className='text-btnColor text-[26px] font-[600]'>
          O'chirish ?
          </h2>
         <div className='flex items-center justify-center gap-[20px] mt-[20px]'>
            <button onClick={AllDeleteModal} className='text-black bg-btnColor px-[20px] py-[5px] rounded-[16px] border-2 border-btnColor hover:bg-transparent hover:text-white transition duration-500 '>
              Ha
            </button>
            <button onClick={AllDeleteModal} className='text-black bg-btnColor px-[20px] py-[5px] rounded-[16px] border-2 border-btnColor hover:bg-transparent hover:text-white transition duration-500 '>
              Yoq
            </button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Finance