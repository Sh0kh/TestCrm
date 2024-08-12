import React, { useState, useRef, useEffect } from 'react'
import Setting from '/images/DashboardSetting.png'

function Project() {
  // const toggleAccordion = () => {
  //   setAccording(!isAccording)
  // }
  const [isCreateModal, setCreateModal] = useState(false);
  const [isCreateModal2, setCreateModal2] = useState(false);

  const modalRef = useRef(null);
  const modalRef2 = useRef(null);

  const OpenCreateModal = () => {
    setCreateModal(!isCreateModal);
  };

  const OpenCreateModal2 = () => {
    setCreateModal2(!isCreateModal2);
  };
  const AllModal = () => {
    OpenCreateModal()
    OpenCreateModal2()
  }
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setCreateModal(false);
    }
    if (modalRef2.current && !modalRef2.current.contains(e.target)) {
      setCreateModal2(false);
    }
  };
  useEffect(() => {
    if (isCreateModal || isCreateModal2) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCreateModal, isCreateModal2]);




  const [openAccordion, setOpenAccordion] = useState(null);

  // Функция для переключения аккордеона
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const [isAccording, setAccording] = useState(false)
  const toggleAccordion2 = () => {
    setAccording(!isAccording)
  }
  const rows = [
    {
      id: 1,
      projectName: 'Loyiha nomi 1',
      workerCount: 6,
      amount: '350$',
      status: '50% yakunlandi',
    },
    {
      id: 2,
      projectName: 'Loyiha nomi 2',
      workerCount: 8,
      amount: '500$',
      status: '75% yakunlandi',
    },
    {
      id: 3,
      projectName: 'Loyiha nomi 3',
      workerCount: 10,
      amount: '800$',
      status: '100% yakunlandi',
    },
  ];
  return (
    <div className='w-full'>
      <div className='Project mt-[50px]'>
        <div className='Project__title flex items-center justify-between'>
          <h1 className='text-[42px] font-[600] text-TitleColor font-montserrat mb-[25px]'>
            Loyihalar
          </h1>
          <div className='Project__title__wrapper flex items-center gap-[32px]'>
            <form className='flex gap-[16px]'>
              <label htmlFor="money" className='w-[100px] px-[16px] py-[8px] h-[42px] bg-white flex items-center gap-[10px] rounded-[16px]'>
                <svg className="h-6 w-6 text-[#83818E]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26"><path fill="currentColor" d="M18 .188c-4.315 0-7.813 1.929-7.813 4.312S13.686 8.813 18 8.813c4.315 0 7.813-1.93 7.813-4.313S22.314.187 18 .187zm7.813 5.593c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.281V7.5c0 1.018.652 1.95 1.72 2.688c1.08.294 2.042.702 2.843 1.218c.993.252 2.085.406 3.25.406c4.315 0 7.813-1.929 7.813-4.312zm0 3c0 2.383-3.498 4.313-7.813 4.313c-.525 0-1.035-.039-1.531-.094a4.35 4.35 0 0 1 .781 1.781c.249.014.495.031.75.031c4.315 0 7.813-1.929 7.813-4.312zM8 11.187c-4.315 0-7.813 1.93-7.813 4.313S3.686 19.813 8 19.813c4.315 0 7.813-1.93 7.813-4.313S12.314 11.187 8 11.187m17.813.594c-.002 2.383-3.498 4.313-7.813 4.313c-.251 0-.505-.018-.75-.032c-.011.075-.017.175-.031.25c.05.151.093.3.093.47v1c.227.011.455.03.688.03c4.315 0 7.813-1.929 7.813-4.312zm0 3c-.002 2.383-3.498 4.313-7.813 4.313c-.251 0-.505-.018-.75-.032c-.011.075-.017.175-.031.25c.05.15.093.3.093.47v1c.227.011.455.03.688.03c4.315 0 7.813-1.929 7.813-4.312zm-10 2c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.282V18.5c0 2.383 3.497 4.313 7.813 4.313s7.813-1.93 7.813-4.313zm0 3c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.282V21.5c0 2.383 3.497 4.313 7.813 4.313s7.813-1.93 7.813-4.313z"></path></svg>
                <input type="number" className='outline-none bg-transparent w-full' id='money' />
              </label>
              <div className="w-[100px]">
                <select class="block w-full h-[42px] text-sm  rounded-[16px] px-[16px] text-[#83818E]   outline-none">
                  <option value="" disabled selected>turi</option>
                  <option value="CRM">CRM</option>
                  <option value="Web">Web</option>
                </select>
              </div>
              <div className="Project__title__grid flex items-center gap-[8px] ">
                <label className='w-[150px] px-[16px] py-[8px] bg-white  rounded-[16px]' htmlFor="">
                  <input type="date" className='outline-none bg-transparent w-full text-[#83818E]' />
                </label>
                <span>
                  dan
                </span>
                <label className='w-[150px] px-[16px] py-[8px] bg-white  rounded-[16px]' htmlFor="">
                  <input type="date" className='outline-none bg-transparent w-full text-[#83818E]' />
                </label>
              </div>
            </form>
            <button onClick={OpenCreateModal} className='transition-all duration-500 bg-btnColor px-[16px] py-[8px] rounded-[24px] flex items-center gap-[8px] border-[2px] border-btnColor hover:bg-transparent'>
              <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"></path>
              </svg>
              <span className='font-[500] text-[16px] font-montserrat '>
                yaratish
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className='ProjectTable bg-white rounded-[16px] p-[30px] w-full'>
            <table className="w-full">
              <thead className="w-full">
                <tr className="w-full">
                  <th className="text-left mr-[60px]">
                    <span className="text-[25px] font-montserrat font-[600] text-TitleColor">
                      Loyihalar
                    </span>
                  </th>
                  <th className="text-left mr-[60px]">
                    <span className="text-[16px] text-[#83818E] font-[400] flex items-center gap-[4px]">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M17.754 11c.966 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V12.75c0-.966.783-1.75 1.75-1.75zM3.75 11l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.5 4.5 0 0 1 2 18.499V12.75A1.75 1.75 0 0 1 3.751 11m16.124-.002L24.25 11c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V12.75c0-.666-.237-1.276-.63-1.752M14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></path></svg>
                      ishchilar soni
                    </span>
                  </th>
                  <th className="text-left mr-[60px]">
                    <span className="text-[16px] text-[#83818E] font-[400] flex items-center gap-[4px]">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26"><path fill="currentColor" d="M18 .188c-4.315 0-7.813 1.929-7.813 4.312S13.686 8.813 18 8.813c4.315 0 7.813-1.93 7.813-4.313S22.314.187 18 .187zm7.813 5.593c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.281V7.5c0 1.018.652 1.95 1.72 2.688c1.08.294 2.042.702 2.843 1.218c.993.252 2.085.406 3.25.406c4.315 0 7.813-1.929 7.813-4.312zm0 3c0 2.383-3.498 4.313-7.813 4.313c-.525 0-1.035-.039-1.531-.094a4.35 4.35 0 0 1 .781 1.781c.249.014.495.031.75.031c4.315 0 7.813-1.929 7.813-4.312zM8 11.187c-4.315 0-7.813 1.93-7.813 4.313S3.686 19.813 8 19.813c4.315 0 7.813-1.93 7.813-4.313S12.314 11.187 8 11.187m17.813.594c-.002 2.383-3.498 4.313-7.813 4.313c-.251 0-.505-.018-.75-.032c-.011.075-.017.175-.031.25c.05.151.093.3.093.47v1c.227.011.455.03.688.03c4.315 0 7.813-1.929 7.813-4.312zm0 3c-.002 2.383-3.498 4.313-7.813 4.313c-.251 0-.505-.018-.75-.032c-.011.075-.017.175-.031.25c.05.15.093.3.093.47v1c.227.011.455.03.688.03c4.315 0 7.813-1.929 7.813-4.312zm-10 2c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.282V18.5c0 2.383 3.497 4.313 7.813 4.313s7.813-1.93 7.813-4.313zm0 3c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.282V21.5c0 2.383 3.497 4.313 7.813 4.313s7.813-1.93 7.813-4.313z"></path></svg>
                      summa
                    </span>
                  </th>
                  <th className="text-left">
                    <span className="text-[16px] text-[#83818E] font-[400] flex items-center gap-[4px]">
                      <img src={Setting} alt="" />
                      holat
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <React.Fragment key={row.id}>
                    <tr className=" mt-[25px] cursor-pointer" >
                      <td className="text-left pt-[25px]">
                        <span className="text-[16px] font-[400] text-[#2C393D]">{row.id}.</span>
                        <span className="text-[16px] font-[400] text-[#2C393D] ml-[10px]">{row.projectName}</span>
                      </td>
                      <td className="pt-[25px]">
                        <span className="text-[16px] font-[400] text-[#2C393D] ml-[60px] block">{row.workerCount}</span>
                      </td>
                      <td className="pt-[25px]">
                        <span className="text-[16px] font-[400] text-[#2C393D]">{row.amount}</span>
                      </td>
                      <td className="pt-[25px]">
                        <span className="text-[16px] font-[400] text-[#2C393D]  block">{row.status}</span>
                      </td>
                      <td className='pt-[25px]'>
                      <button onClick={() => toggleAccordion(index)} className='cursor-pointer w-[50px]' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                          <circle cx="2.5" cy="9.5" r="2.5" fill="black" />
                          <circle cx="2.5" cy="16.5" r="2.5" fill="black" />
                        </svg>
                      </button>
                    </td>
                    </tr>
                    <tr>
                    <td colSpan="2" >
                  <div
                    className={`accordion-content w-full ${openAccordion === index ? 'open' : ''}`}
                  >
                      <div className='border border-[#B6BEC3] p-[10px] rounded-[5px] mt-[15px] w-full'>
                <div className='flex items-center justify-between '>
                  <span className='font-montserrat text-[16px] font-[500] '>
                    Xodimlar
                  </span>
                  <button onClick={() => toggleAccordion(index)} >
                    <svg className='text-[30px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9m0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7m.707-7l2.646-2.646a.5.5 0 0 0 0-.707a.5.5 0 0 0-.707 0L12 11.293L9.354 8.646a.5.5 0 0 0-.707.707L11.293 12l-2.646 2.646a.5.5 0 0 0 .707.708L12 12.707l2.646 2.646a.5.5 0 1 0 .708-.706z"></path></svg>
                  </button>
                </div>
                <div className='flex items-center gap-[10px] flex-col mt-[10px]'>
                  <div className='w-full'>
                    <div
                      className='flex items-center justify-between w-full cursor-pointer'
                      onClick={toggleAccordion2}
                    >
                      <div className='flex items-center gap-[8px]'>
                        <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                          1.
                        </span>
                        <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                          Frontend
                        </span>
                        <span className='font-montserrat text-[16px] font-[500] text-[#1F1E30]'>
                          2x
                        </span>
                      </div>
                      <div className='flex items-center gap-[5px]'>
                        <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                          Akbarov A
                        </span>
                        <svg className={`font-montserrat text-[16px] font-[500] text-[#83818E] transform transition-transform ${isAccording ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M30 12L16 24L2 12"></path></svg>
                      </div>
                    </div>
                    {isAccording && (
                      <div className='mt-2 flex items-center justify-end'>
                        <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                          Javlonov A
                        </span>
                      </div>
                    )}
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-[8px]'>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        2.
                      </span>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        Frontend
                      </span>

                    </div>
                    <div className='flex items-center gap-[5px]'>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        Akbarov A
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-[8px]'>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        3.
                      </span>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        Frontend
                      </span>

                    </div>
                    <div className='flex items-center gap-[5px]'>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        Akbarov A
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-[10px] flex-col mt-[10px] border-t border-[#B6BEC3]'>
                  <div className='flex items-center justify-between w-full mt-[10px]'>
                    <div className='flex items-center gap-[8px]'>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        boshlanish
                      </span>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        22.05.24
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-[8px]'>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        tugash
                      </span>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                      <span className='font-montserrat text-[16px] font-[500] text-[#83818E]'>
                        22.06.24
                      </span>
                    </div>
                  </div>
                </div>
              </div>
                  </div>
                </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <div className={`WorkersModal p-[5px] bg-[#d9d9d9bc] fixed inset-0 flex items-center justify-center ${isCreateModal ? 'WorkersModalActive' : ''}`}>
        <div ref={modalRef} className='Modal bg-customBg rounded-[16px] p-[30px] w-[360px]'>
          <h2 className='text-btnColor text-[26px] font-[600]'>
            Loyiha yaratish
          </h2>
          <div className='mt-[19px] w-full'>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='Loyiha nomi' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='boshlanish vaqti' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='tugash vaqti' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <select className='w-full outline-none bg-transparent text-[#807E8B] mb-[30px] border-b-[1px] pb-[5px]'>
              <option value="Web" className='bg-transparent'>Web</option>
              <option value="Web">CRM</option>
            </select>
            <button onClick={AllModal} className='bg-btnColor w-full px-[16px] py-[8px] rounded-[24px] flex items-center justify-center gap-[8px] border-[2px] border-btnColor hover:bg-transparent hover:text-white transition-all duration-500'>
              <span className='font-[500] text-[16px] font-montserrat'>
                Kegingisi
              </span>
              <svg className='text-[25px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m13.5 7.5l-4-4m4 4l-4 4m4-4H1"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`WorkersModal p-[5px] bg-[#d9d9d9bc] fixed inset-0 flex items-center justify-center ${isCreateModal2 ? 'WorkersModalActive' : ''}`}>
        <div ref={modalRef2} className='Modal bg-customBg rounded-[16px] p-[30px] w-[360px]'>
          <h2 className='text-btnColor text-[26px] font-[600]'>
            Klent
          </h2>
          <form className='mt-[19px] w-full'>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='Loyiha nomi' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='boshlanish vaqti' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <label htmlFor="" className='w-full mb-[20px] block'>
              <input type="text" placeholder='tugash vaqti' className='text-white w-full outline-none bg-transparent border-b-[1px] pb-[5px] border-[#807E8B]' />
            </label>
            <select className='w-full outline-none bg-transparent text-[#807E8B] mb-[30px] border-b-[1px] pb-[5px]'>
              <option value="Web" className='bg-transparent'>Web</option>
              <option value="Web">CRM</option>
            </select>
            <button className='bg-btnColor w-full px-[16px] py-[8px] rounded-[24px] flex items-center justify-center gap-[8px] border-[2px] border-btnColor hover:bg-transparent hover:text-white transition-all duration-500'>
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
    </div>
  )
}

export default Project