import React from 'react';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Learn", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" }
  ];
  const [open, setOpen] = useState(false);

  const handleClick = (event, link) => {
    event.preventDefault();
    // handle navigation using JavaScript here
    console.log(`Navigating to ${link}`);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="cube-outline"></ion-icon>
          </span>
          Totalented
        </div>
        <div>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
          {links.map((link) => (
            <li key={link.name} className='md:m-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500' onClick={(event) => handleClick(event, link.link)}>
                {link.name}
              </a>
            </li>
          ))}
          <Button>
            Login
          </Button>
        </ul>
      </div>
    </div>
  );
}