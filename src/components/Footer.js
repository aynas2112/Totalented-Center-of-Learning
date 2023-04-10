import React from 'react'
import { FaFacebookSquare, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white">
      <hr class="w-1/2 h-1 rounded-2xl mx-auto my-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% " /> 
      <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100083271194533" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-gray-500">
            <FaFacebookSquare size={24} />
          </a>
          <a href="https://wa.me/+918383006099" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-gray-500">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.instagram.com/realrule.2048/" target="_blank" rel="noopener noreferrer" className="text-pink-500  hover:text-gray-500">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer