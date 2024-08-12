import React, { useState } from 'react'
import Calendar from '/images/FinanceCalendar.svg'
import Yers from '/images/FinanceYers.svg'
// import Setting from '../../public/images/DashboardSetting.png'
function Finance() {
  const [isMonth, setMonth] = useState(true)
  const [isMonth2, setMonth2] = useState(true)
  const Yerstoggle = () =>{
    setMonth(false)
  }
  const Yerstoggle2 = () =>{
    setMonth2(false)
  }
  const MonthToggle  = () =>{
    setMonth(true)
  }
  const MonthToggle2  = () =>{
    setMonth2(true)
  }
  return (
    <div className='Finance w-full pb-[50px]'>
       <div className='mt-[50px]'>
          <h1 className='text-[42px] font-[600] text-TitleColor font-montserrat'>
            Moliya
          </h1>
          <div className='Finance__Wrapper flex items-center gap-[25px] mt-[50px]'>
            {isMonth === true &&(
            <div  className='bg-white p-[15px] rounded-[16px] '>
              <div className='flex items-center justify-end mb-[15px]'>
                  <button onClick={Yerstoggle} className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                      <img src={Calendar} alt="" />
                      <span className='text-[10px] text-[#1B1A28] font-montserrat '> 
                        oylik
                      </span>
                  </button>
              </div>
              <div className='flex items-end gap-[2px]'>
                <h2 className='text-[42px] text-TitleColor] font-[600] font-montserrat'>
                <span className='text-[16px] text-[#4F5759] font-[500] font-montserrat mr-[5px]'>
                  UZS
                </span>
                23 560 000
                </h2>
              </div>
              <div className='flex items-center justify-end'>
                  <span className='text-[16px] font-[400] text-[#4F5759]'> 
                  Oylik tushum
                  </span>
              </div>
            </div>
            )}
            {isMonth === false &&(
              <div  className='bg-white p-[15px] rounded-[16px]'>
              <div className='flex items-center justify-end mb-[15px]'>
                  <button onClick={MonthToggle} className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                      <img src={Yers} alt="" />
                      <span className='text-[10px] text-[#1B1A28] font-montserrat '> 
                        yilik
                      </span>
                  </button>
              </div>
              <div className='flex items-end gap-[2px]'>
                <h2 className='text-[42px] text-TitleColor] font-[600] font-montserrat'>
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
            {isMonth2 === true &&(
            <div className='bg-white p-[15px] rounded-[16px]'>
              <div className='flex items-center justify-end mb-[15px]'>
                  <button onClick={Yerstoggle2} className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                      <img src={Calendar} alt="" />
                      <span className='text-[10px] text-[#1B1A28] font-montserrat '> 
                        oylik
                      </span>
                  </button>
              </div>
              <div className='flex items-end gap-[2px]'>
                <h2 className='text-[42px] text-TitleColor] font-[600] font-montserrat'>
                <span className='text-[16px] text-[#4F5759] font-[500] font-montserrat mr-[5px]'>
                  UZS
                </span>
                10 000 000
                </h2>
              </div>
              <div className='flex items-center justify-end'>
                  <span className='text-[16px] font-[400] text-[#4F5759]'> 
                  Oylik sof foyda
                  </span>
              </div>
            </div>
            )}
            {isMonth2 === false &&(
              <div  className='bg-white p-[15px] rounded-[16px]'>
              <div className='flex items-center justify-end mb-[15px]'>
                  <button onClick={MonthToggle2} className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                      <img src={Yers} alt="" />
                      <span className='text-[10px] text-[#1B1A28] font-montserrat '> 
                        yilik
                      </span>
                  </button>
              </div>
              <div className='flex items-end gap-[2px]'>
                <h2 className='text-[42px] text-TitleColor] font-[600] font-montserrat'>
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
            <div className='bg-white p-[15px] rounded-[16px]'>
              <div className='flex items-center justify-end mb-[15px]'>
                  <button className='bg-btnColor px-[8px] py-[5px] rounded-[8px] flex items-center gap-[10px]'>
                      {/* <img src={Calendar} alt="" /> */}
                      <svg   xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M17.754 11c.966 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V12.75c0-.966.783-1.75 1.75-1.75zM3.75 11l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.5 4.5 0 0 1 2 18.499V12.75A1.75 1.75 0 0 1 3.751 11m16.124-.002L24.25 11c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V12.75c0-.666-.237-1.276-.63-1.752M14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></path></svg>
                      <span className='text-[10px] text-[#1B1A28] font-montserrat '> 
                      umumiy
                      </span>
                  </button>
              </div>
              <div className='flex items-end gap-[2px]'>
                <h2 className='text-[42px] text-TitleColor] font-[600] font-montserrat'>
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
                        loiha turi
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
                    <td className='pt-[25px]'>
                      <button  className='cursor-pointer' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                          <circle cx="2.5" cy="9.5" r="2.5" fill="black" />
                          <circle cx="2.5" cy="16.5" r="2.5" fill="black" />
                        </svg>
                      </button>
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
                    <td className='pt-[25px]'>
                      <button  className='cursor-pointer' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                          <circle cx="2.5" cy="9.5" r="2.5" fill="black" />
                          <circle cx="2.5" cy="16.5" r="2.5" fill="black" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
       </div>
    </div>
  )
}

export default Finance