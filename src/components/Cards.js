import React from 'react'
import {Link} from 'react-router-dom'
import Mental_Math from './Mental_Math.gif'
import Vedic_Math from './Vedic_Math.gif'
import Table_Writing from './Table_Writing.gif'
import Milk_Shake from './Milk_Shake.gif'
import Pizza from './Pizza.gif'
import Mocktail from './Mocktail.gif'

function Cards() {
  return (
    <div className='flex items-center justify-center container mx-auto mt-40'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Mental Maths  */}
        <div className='card'>
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={Mental_Math} />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3x'>Mental Math</h5>
            <p className='text-slate-500 text-lg-mt-3'>
            Mental math refers to performing mathematical calculations in one's mind, without the use of external aids such as calculators or paper and pencil. Mental math can involve a variety of mathematical operations, including addition, subtraction, multiplication, division, and more complex operations such as exponents and logarithms.
            Mental math is often used in everyday life, such as when calculating a tip or dividing a bill among friends at a restaurant. It is also an important skill in academic settings, particularly in math and science courses. Developing strong mental math skills can improve one's overall numerical fluency and problem-solving abilities.
            {/* <Link to="/ment" className=''></Link> */}
            <br />
            <br />
            <div className="text-center">
                <a href="#" className='bg-blue-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out px-20'>Explore</a>
              </div>
            </p>
          </div>
        </div>

        {/* Vedic Maths  */}
        <div className='card'>
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={Vedic_Math} alt="mental-math" />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-8x'>Vedic Maths</h5>
            <p className='text-slate-500 text-lg-mt-5'>
            Vedic Math is a system of mathematics that originated in ancient India. It is based on 16 sutras (aphorisms) and 13 sub-sutras (corollaries), which are simple principles and techniques for solving mathematical problems. Vedic Math is known for its simplicity, efficiency, and versatility. It can be used to perform calculations in arithmetic, algebra, geometry, and trigonometry, among other areas. Some of the benefits of Vedic Math include increased speed and accuracy in calculations, improved mental agility and problem-solving skills, and a deeper understanding and appreciation of mathematics. Vedic Math is still used and taught today in India and around the world.


            {/* <Link to="/ment" className=''></Link> */}
            <br />
            <br />
            <div className="text-center">
                <a href="#" className='bg-blue-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out px-20'>Explore</a>
              </div>
            </p>
          </div>
        </div>

        {/* Table Writing */}
        <div className='card'>
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={Table_Writing} alt="mental-math" />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-8x'>Table Writing</h5>
            <p className='text-slate-500 text-lg-mt-5'>
            Are you struggling to memorize multiplication tables? Do you or your child find it difficult to remember the values of trigonometric functions? Our program offers a unique approach to learning mathematical tables. Through a combination of visualization techniques and mnemonic devices, we help you internalize the tables and make them second nature. Our program covers all the essential tables, from basic addition and subtraction to complex trigonometric functions. You will learn to perform calculations quickly and accurately, saving time and increasing confidence. Give yourself or your child the gift of mathematical mastery. Sign up for our program today and experience the joy of effortless computation.


            {/* <Link to="/ment" className=''></Link> */}
            <br />
            <br />
            <div className="text-center">
                <a href="#" className='bg-blue-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out px-20'>Explore</a>
              </div>
            </p>
          </div>
        </div>

        {/* Milk Shake  */}
        <div className='card'>
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={Milk_Shake} alt="mental-math" />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-8x'>Milkshakes</h5>
            <p className='text-slate-500 text-lg-mt-5'>
            Are you tired of bland and boring milkshakes? Want to learn how to make delicious and satisfying milkshakes at home? Our milkshake-making course is perfect for you! We teach you how to create a variety of milkshakes using different ingredients, from classic vanilla and chocolate to more exotic flavors like strawberry cheesecake and caramel banana. You'll learn tips and tricks for achieving the perfect consistency, as well as how to customize your milkshakes to suit your taste preferences. Impress your friends and family with your newfound milkshake-making skills, or simply indulge in a sweet treat for yourself. Sign up for our course today and start making delicious milkshakes like a pro!


            {/* <Link to="/ment" className=''></Link> */}
            <br />
            <br />
            <div className="text-center">
                <a href="#" className='bg-blue-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out px-20'>Explore</a>
              </div>
            </p>
          </div>
        </div>

        {/* Pizza  */}
        <div className='card'>
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={Pizza} alt="mental-math" />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-8x'>Pizza</h5>
            <p className='text-slate-500 text-lg-mt-5'>
            Are you tired of ordering pizza from the same old places? Why not learn to make your own delicious pizza at home? Our hands-on cooking classes will teach you the art of making the perfect pizza, from the dough to the toppings. We provide all the ingredients and equipment, and our experienced instructors will guide you every step of the way. Not only is it a fun and interactive activity, but you'll also be able to customize your pizza to your liking. Impress your friends and family with your newfound culinary skills. Sign up for our pizza making classes today and experience the satisfaction of creating your own mouthwatering pizza from scratch!


            {/* <Link to="/ment" className=''></Link> */}
            <br />
            <br />
            <div className="text-center">
                <a href="#" className='bg-blue-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out px-20'>Explore</a>
              </div>
            </p>
          </div>
        </div>

        {/* Mocktails  */}
        <div className='card'>
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={Mocktail} alt="mental-math" />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-8x'>Mocktail</h5>
            <p className='text-slate-500 text-lg-mt-5'>
            Want to impress your friends with your mixology skills? Learn to make delicious mocktails with our easy-to-follow program. Our experienced instructors will guide you through the process of creating refreshing drinks that are perfect for any occasion. You'll learn the art of balancing flavors, creating beautiful presentations, and incorporating unique ingredients to make your mocktails stand out. Whether you're looking to host a party or just want to enjoy a fun and flavorful drink at home, our program has something for everyone. With our step-by-step instruction and hands-on practice, you'll be a mocktail master in no time. Sign up today and discover the world of mocktail making!


            {/* <Link to="/ment" className=''></Link> */}
            <br />
            <br />
            <div className="text-center">
                <a href="#" className='bg-blue-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out px-20'>Explore</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards