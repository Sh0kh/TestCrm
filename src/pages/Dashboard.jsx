import React, { useState } from 'react'
import DashboardPerson from '/images/DashboardPerson.png'
import Nomer1 from '/images/DashboardNomer1.svg'
import Setting from '/images/DashboardSetting.png'
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
const chartConfig = {
  type: "bar",
  height: 323,
  series: [
    {
      name: "Sales",
      data: [40000000, 10000000, 30000000, 20000000, 25000000, 15000000, 35000000, 10000000, 20000000, 40000000, 25000000],
    },
  ],
  options: {
    chart: {
      toolbar: {
        // show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 2,
        colors: {
          backgroundBarColors: ["#C7C7C7"],
          backgroundBarOpacity: 0.3,
        },
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "yan",
        "fev",
        "mar",
        "apr",
        "may",
        "iyn",
        "iyl",
        "avg",
        "okt",
        "noy",
        "dek",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: false,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};
function Dashboard() {




  const [openAccordion, setOpenAccordion] = useState(null);


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
    <div className='Dashboard w-full pr-[100px] pb-[50px]'>
      <div className=' mt-[50px] '>
        <h1 className='text-[42px] font-[600] text-TitleColor font-montserrat'>
          Dashboard
        </h1>
        <div className='Dashboard__wrapper flex gap-[25px]  mt-[25px]'>
          <div className='Dashboard__grid '>
            <div className='Dashboard__card w-[284px] bg-white rounded-[16px] mx-auto  pr-[10px] pl-[30px] py-[15px] flex  justify-between'>
              <div className=''>
                <span className='text-[68px] font-[400] mb-[4px] h-[85px] block text-TitleColor '>
                  4
                </span>
                <div className='flex gap-[4px]'>
                  <svg className='text-[#56565B] text-[28px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M13.649 2.135a10 10 0 0 0-3.298 0c-.336.456-.664 1.045-.963 1.764c-.282.676-.53 1.446-.736 2.291C9.722 6.066 10.845 6 12 6s2.278.066 3.348.19a15.6 15.6 0 0 0-.735-2.29c-.3-.72-.628-1.31-.964-1.765m2.093 6.123A27 27 0 0 0 12 8c-1.318 0-2.576.092-3.742.258A27 27 0 0 0 8 12c0 1.318.092 2.576.258 3.742C9.424 15.908 10.682 16 12 16s2.576-.091 3.742-.258C15.908 14.576 16 13.318 16 12s-.091-2.576-.258-3.742m2.068 7.09c.124-1.07.19-2.193.19-3.348s-.066-2.278-.19-3.348a15.6 15.6 0 0 1 2.29.736c.72.3 1.31.627 1.765.963a10 10 0 0 1 0 3.298c-.455.336-1.045.664-1.764.964c-.676.281-1.446.53-2.291.735m-2.462 2.462c-1.07.124-2.193.19-3.348.19s-2.278-.066-3.348-.19c.206.845.454 1.615.736 2.29c.3.72.627 1.31.963 1.765a10 10 0 0 0 3.298 0c.336-.455.664-1.045.964-1.764c.281-.676.53-1.446.735-2.291m1.066 3.166l.045-.106c.415-.996.758-2.143 1.014-3.397a19 19 0 0 0 3.016-.862l.487-.197a10.04 10.04 0 0 1-4.562 4.562m-8.828 0l-.045-.106c-.415-.996-.758-2.143-1.014-3.397a19 19 0 0 1-3.016-.862l-.487-.197a10.04 10.04 0 0 0 4.562 4.562M6.19 15.348A29 29 0 0 1 6 12c0-1.155.066-2.278.19-3.348c-.845.206-1.615.454-2.29.736c-.72.3-1.31.627-1.765.963a10 10 0 0 0 0 3.298c.456.336 1.045.664 1.764.964c.676.281 1.446.53 2.291.735m.337-8.82A19 19 0 0 1 7.39 3.51l.197-.487a10.04 10.04 0 0 0-4.562 4.562l.106-.045c.996-.415 2.143-.758 3.397-1.014m10.946 0a19 19 0 0 0-.862-3.017l-.197-.487a10.04 10.04 0 0 1 4.562 4.562l-.106-.045c-.996-.415-2.143-.758-3.397-1.014"></path></g></svg>
                  <span className='text-[16px] font-[400] font-montserrat'>
                    Loyihalar soni
                  </span>
                </div>
              </div>
              <button className='bg-btnColor flex items-center gap-[10px] p-[3px] rounded-[20px] font-montserrat px-[10px] h-[30px] text-[8px]'>
                <svg className='text-[20px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M210.83 173.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L198.34 180H48a4 4 0 0 1 0-8h150.34l-25.17-25.17a4 4 0 0 1 5.66-5.66ZM77.17 114.83a4 4 0 0 0 5.66-5.66L57.66 84H208a4 4 0 0 0 0-8H57.66l25.17-25.17a4 4 0 0 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66Z"></path></svg>
                hozirgi
              </button>
            </div>
            {/* Нужно поменят и посмотреть на логику на бэкенд  */}
            <div className='Dashboard__card2 w-[284px] bg-white rounded-[16px]  p-[30px] mt-[25px] mx-auto'>
              <span className='text-[25px]  text-TitleColor font-[600] font-montserrat'>
                Xodimlar reytingi
              </span>
              <div className='mt-[15px]'>
                <div className='flex items-center justify-between mt-[10px]'>
                  <div className='flex items-center gap-[6px]'>
                    <img src={DashboardPerson} alt="foto" className='w-[35px] h-[35px]' />
                    <div className='flex  flex-col'>
                      <span className='text-[16px] font-[400] font-montserrat'>
                        Abbos R.
                      </span>
                      <span className='text-[12px] text-[#808B8E] '>
                        Dizayner
                      </span>
                    </div>
                  </div>
                  <div className='cursor-pointer'>
                    <img src={Nomer1} alt="" />
                  </div>
                </div>
                <div className='flex items-center justify-between mt-[10px]'>
                  <div className='flex items-center gap-[6px]'>
                    <img src={DashboardPerson} alt="foto" className='w-[35px] h-[35px]' />
                    <div className='flex  flex-col'>
                      <span className='text-[16px] font-[400] font-montserrat'>
                        Abbos R.
                      </span>
                      <span className='text-[12px] text-[#808B8E] '>
                        Dizayner
                      </span>
                    </div>
                  </div>
                  <div className='cursor-pointer'>
                    <img src={Nomer1} alt="" />
                  </div>
                </div>
                <div className='flex items-center justify-between mt-[10px]'>
                  <div className='flex items-center gap-[6px]'>
                    <img src={DashboardPerson} alt="foto" className='w-[35px] h-[35px]' />
                    <div className='flex  flex-col'>
                      <span className='text-[16px] font-[400] font-montserrat'>
                        Abbos R.
                      </span>
                      <span className='text-[12px] text-[#808B8E] '>
                        Dizayner
                      </span>
                    </div>
                  </div>
                  <div className='cursor-pointer'>
                    <img src={Nomer1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='DashboardTable bg-white rounded-[16px] p-[30px] w-full'>
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
                        <button onClick={() => toggleAccordion(index)} className='cursor-pointer w-[50px] flex items-center justify-center' >
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
        <div className='mt-[25px]'>
          <h1 className='text-[26px] text-TitleColor font-[600] mb-[12px]'>
            Oylik Statistika
          </h1>
          <Card>
            <CardBody className="px-2 pb-0 ">
              <Chart  {...chartConfig} />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard