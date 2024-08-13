import React, { useState, useRef, useEffect } from 'react';
import WorkersFoto from '/images/WorkersFoto.svg';
function Workers() {
  const [isModal, setModal] = useState(false);
  const [isModalDelte, setModalDelate] = useState(false);
  const [isSmallModal, setSmallModal] = useState(false)
  const modalRef = useRef(null);
  const modalRef2 = useRef(null);
  const OpenSmallModal = () =>{
    setSmallModal(!isSmallModal)
  }
  const OpenModal = () => {
    setModal(!isModal);
  };
  const OpenModal2 = () => {
    setModalDelate(!isModalDelte);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal(false);
    }
    if (modalRef2.current && !modalRef2.current.contains(e.target)) {
      setModalDelate(false);
    }
  };

  useEffect(() => {
    if (isModal || isModalDelte) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModal, isModalDelte]);

  return (
    <div className='Workers w-full relative'>
      <div className='mt-[50px]'>
        <div className='Worker__title flex items-center justify-between'>
          <h1 className='text-[42px] font-[600] text-TitleColor font-montserrat'>
            Xodimlar
          </h1>
          <button onClick={OpenModal} className='transition-all duration-500 bg-btnColor px-[16px] py-[8px] rounded-[24px] flex items-center gap-[8px] border-[2px] border-btnColor hover:bg-transparent'>
            <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"></path>
            </svg>
            <span className='font-[500] text-[16px] font-montserrat '>
              add
            </span>
          </button>
        </div>
        <div className='WorkersTable bg-white rounded-[16px] p-[30px] w-[80%] mt-[50px]'>
          <table className='w-full'>
            <thead className='w-full'>
              <tr className='w-full'>
                <th className='text-left mr-[60px]'>
                  <span className='text-[25px] font-montserrat font-[600] text-TitleColor'>
                    Xodimlar
                  </span>
                </th>
                <th className='text-left mr-[60px]'>
                  <span className='text-[16px] text-[#83818E] font-[400] flex items-center gap-[4px]'>
                    telefon
                  </span>
                </th>
                <th className='text-left mr-[60px]'>
                  <span className='text-[16px] text-[#83818E] font-[400] flex items-center gap-[4px]'>
                    role
                  </span>
                </th>
                <th className='text-left mr-[60px]'>
                  <span className='text-[16px] text-[#83818E] font-[400] flex items-center gap-[4px]'>
                    reyting
                  </span>
                </th>
                <th className='text-left mr-[60px]'>
                  <span className='text-[16px] text-[#83818E] font-[400] flex items-center gap-[4px]'>
                    loyihalar soni
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='mt-[25px]'>
                <td className='text-left pt-[25px] flex items-center gap-[5px]'>
                  <img src={WorkersFoto} alt="" />
                  <span className='text-[16px] font-[400] text-[#2C393D]'>Anvarov begzod</span>
                </td>
                <td className='pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D]'>
                    99 969 69 99
                  </span>
                </td>
                <td className='pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D]'>
                    dasturchi
                  </span>
                </td>
                <td className='pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D]'>
                    30%
                  </span>
                </td>
                <td className='pt-[25px]'>
                  <span className='text-[16px] font-[400] text-[#2C393D]'>
                    8 ta
                  </span>
                </td>
                <td className='pt-[25px] '>
                  <div className='SmallModal__Btn__mobile flex items-center gap-[5px] hidden'>
                  <button className='flex items-center justify-center p-[5px] bg-[#DDDDF5] rounded-[4px]'>
                      <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></path></svg>
                      </button>
                      <button className='flex items-center justify-center bg-[#FEE2D6] p-[5px] rounded-[4px]'>
                      <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m-4.74 6.703A1.5 1.5 0 0 0 6.246 14h3.508a1.5 1.5 0 0 0 1.487-1.297L12.427 4H3.573z"></path></svg>
                      </button>
                  </div>
                  <div className='SmallModal__Btn'>
                  <button onClick={OpenSmallModal} className='cursor-pointer relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19" fill="none" className='relative z-10'>
                      <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                      <circle cx="2.5" cy="9.5" r="2.5" fill="black" />
                      <circle cx="2.5" cy="16.5" r="2.5" fill="black" />
                    </svg>
                  </button>
                  <div className={`smallModal w-[105px] h-[50px] pr-[10px] py-[9px] absolute top-[192px] right-[10%] z-0 hidden   ${isSmallModal ? 'SamllModalActive': ''} `}>
                      <button className='flex items-center justify-center p-[5px] bg-[#DDDDF5] rounded-[4px]'>
                      <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></path></svg>
                      </button>
                      <button onClick={OpenModal2} className='flex items-center justify-center bg-[#FEE2D6] p-[5px] rounded-[4px]'>
                      <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m-4.74 6.703A1.5 1.5 0 0 0 6.246 14h3.508a1.5 1.5 0 0 0 1.487-1.297L12.427 4H3.573z"></path></svg>
                      </button>
                  </div>  
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={`WorkersModal p-[5px] bg-[#d9d9d9bc] fixed inset-0 flex items-center justify-center ${isModal ? 'WorkersModalActive' : ''}`}>
        <div ref={modalRef} className='Modal bg-customBg rounded-[16px] p-[30px] w-[360px]'>
          <h2 className='text-btnColor text-[26px] font-[600]'>
            Xodim qo’shish
          </h2>
          <form className='mt-[19px] w-full'>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='ism familya' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='telefon' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='role' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='parol' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <button onClick={OpenModal} className='bg-btnColor w-full px-[16px] py-[8px] rounded-[24px] flex items-center justify-center gap-[8px] border-[2px] border-btnColor hover:bg-transparent hover:text-white transition-all duration-500'>
              <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"></path>
              </svg>
              <span className='font-[500] text-[16px] font-montserrat'>
                Saqlash
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className={`WorkersModal p-[5px] bg-[#d9d9d9bc] fixed inset-0 flex items-center justify-center ${isModalDelte ? 'WorkersModalActive' : ''}`}>
        <div ref={modalRef2} className='Modal bg-customBg rounded-[16px] p-[30px] w-[360px] text-center'>
          <h2 className='text-btnColor text-[26px] font-[600]'>
            Xodim qo’shish
          </h2>
         <div className='flex items-center justify-center gap-[20px] mt-[20px]'>
            <button onClick={OpenModal2} className='text-black bg-btnColor px-[20px] py-[5px] rounded-[16px] border-2 border-btnColor hover:bg-transparent hover:text-white transition duration-500 '>
              Ha
            </button>
            <button onClick={OpenModal2} className='text-black bg-btnColor px-[20px] py-[5px] rounded-[16px] border-2 border-btnColor hover:bg-transparent hover:text-white transition duration-500 '>
              Yoq
            </button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Workers;
