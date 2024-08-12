import React from 'react'
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
}
  from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import '../index.css'
export default function Sidebar() {
  const location = useLocation()
  const Dashboard = location.pathname === '/'
  const Finance = location.pathname === '/finance'
  const Workers = location.pathname === '/workers'
  const Archive = location.pathname === '/archive'
  const Project = location.pathname === '/project'

  return (
    <Card className="Sidbar w-[270px]  p-[25px] pt-[101px] shadow-xl shadow-blue-gray-900/5 bg-customBg rounded-[50px]  flex flex-col  justify-between ">
      <List className='min-w-full'>
        <NavLink to='/'>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor ${Dashboard ? 'activeSaidbar' : ''}`}>
          <ListItemPrefix >
          <svg className={`h-5 w-5 `} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1M13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1"></path></svg>
          </ListItemPrefix>
          Dashboard 
        </ListItem >
        </NavLink>
        <NavLink to='/finance'>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor  hover:opacity-100 ${Finance ? 'activeSaidbar' : ''}` }>
          <ListItemPrefix>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26"><path fill="currentColor" d="M18 .188c-4.315 0-7.813 1.929-7.813 4.312S13.686 8.813 18 8.813c4.315 0 7.813-1.93 7.813-4.313S22.314.187 18 .187zm7.813 5.593c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.281V7.5c0 1.018.652 1.95 1.72 2.688c1.08.294 2.042.702 2.843 1.218c.993.252 2.085.406 3.25.406c4.315 0 7.813-1.929 7.813-4.312zm0 3c0 2.383-3.498 4.313-7.813 4.313c-.525 0-1.035-.039-1.531-.094a4.35 4.35 0 0 1 .781 1.781c.249.014.495.031.75.031c4.315 0 7.813-1.929 7.813-4.312zM8 11.187c-4.315 0-7.813 1.93-7.813 4.313S3.686 19.813 8 19.813c4.315 0 7.813-1.93 7.813-4.313S12.314 11.187 8 11.187m17.813.594c-.002 2.383-3.498 4.313-7.813 4.313c-.251 0-.505-.018-.75-.032c-.011.075-.017.175-.031.25c.05.151.093.3.093.47v1c.227.011.455.03.688.03c4.315 0 7.813-1.929 7.813-4.312zm0 3c-.002 2.383-3.498 4.313-7.813 4.313c-.251 0-.505-.018-.75-.032c-.011.075-.017.175-.031.25c.05.15.093.3.093.47v1c.227.011.455.03.688.03c4.315 0 7.813-1.929 7.813-4.312zm-10 2c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.282V18.5c0 2.383 3.497 4.313 7.813 4.313s7.813-1.93 7.813-4.313zm0 3c-.002 2.383-3.498 4.313-7.813 4.313c-4.303 0-7.793-1.909-7.813-4.282V21.5c0 2.383 3.497 4.313 7.813 4.313s7.813-1.93 7.813-4.313z"></path></svg>
          </ListItemPrefix>
          Molya
        </ListItem>
        </NavLink>
        <NavLink to='/workers'>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor  hover:opacity-100 ${Workers ? 'activeSaidbar' : ''}` }>
          <ListItemPrefix>
          <svg   className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M17.754 11c.966 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V12.75c0-.966.783-1.75 1.75-1.75zM3.75 11l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.5 4.5 0 0 1 2 18.499V12.75A1.75 1.75 0 0 1 3.751 11m16.124-.002L24.25 11c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V12.75c0-.666-.237-1.276-.63-1.752M14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></path></svg>
          </ListItemPrefix>
          Xodimlar
        </ListItem>
        </NavLink>
        <NavLink to='/archive'>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor  hover:opacity-100 ${Archive ? 'activeSaidbar' : ''}` }>
          <ListItemPrefix>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M13.981 2H6.018s-.996 0-.996 1h9.955c0-1-.996-1-.996-1m2.987 3c0-1-.995-1-.995-1H4.027s-.995 0-.995 1v1h13.936zm1.99 1l-.588-.592V7H1.63V5.408L1.041 6C.452 6.592.03 6.75.267 8c.236 1.246 1.379 8.076 1.549 9c.186 1.014 1.217 1 1.217 1h13.936s1.03.014 1.217-1c.17-.924 1.312-7.754 1.549-9c.235-1.25-.187-1.408-.777-2M14 11.997c0 .554-.449 1.003-1.003 1.003H7.003A1.003 1.003 0 0 1 6 11.997V10h1v2h6v-2h1z"></path></svg>
          </ListItemPrefix>
          Arxiv
        </ListItem>
        </NavLink>
        <NavLink to='/project'>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor  hover:opacity-100 ${Project ? 'activeSaidbar' : ''}` }>
          <ListItemPrefix>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M208 72v112H48V72Z" opacity={0.2}></path><path d="M88 144v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8v-24a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m56-72v96h8a8 8 0 0 1 0 16h-88v17.38a24 24 0 1 1-16 0V192H32a8 8 0 0 1 0-16h8V80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16m-80 152a8 8 0 1 0-8 8a8 8 0 0 0 8-8M40 64h176V48H40Zm160 16H56v96h144Z"></path></g></svg>
          </ListItemPrefix>
          Loyihalar
        </ListItem>
        </NavLink>
      </List>
        <ListItem className={`font-montserrat text-[16px] rounded-[50px] text-white hover:bg-btnColor  hover:opacity-100  mt-[180px]` }>
          <ListItemPrefix>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h7A1.5 1.5 0 0 1 10 1.5v1.939a2 2 0 0 0-.734 1.311H5.75a2.25 2.25 0 1 0 0 4.5h3.516A2 2 0 0 0 10 10.561V12.5A1.5 1.5 0 0 1 8.5 14h-7A1.5 1.5 0 0 1 0 12.5zm10.963 2.807A.75.75 0 0 0 10.5 5v1H5.75a1 1 0 0 0 0 2h4.75v1a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-.817-.163" clipRule="evenodd"></path></svg>
          </ListItemPrefix>
          Chiqish
        </ListItem>
    </Card>
    
  )
}
